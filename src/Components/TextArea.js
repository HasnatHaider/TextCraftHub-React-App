import React, { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const upperText = () => {
    let a = text.toUpperCase();
    setText(a);
    props.sAlert("Uppercase Successfully!!!", "success")
  };

  const lowerText = () => {
    let a = text.toLowerCase();
    setText(a);
    props.sAlert("Lowercase Successfully!!!", "success")
  };

  const onChanegeHandler = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
    props.sAlert("Cleared Successfully!!!", "success")
  };

  const copyText = () => {
    let a = document.getElementById("disableTextArea");
    a.select();
    navigator.clipboard.writeText(a.value);
    props.sAlert("Copied Successfully!!!", "success")
  };

  const removeSpaces = () => {
    let a = text.split(/[ ]+/);
    setText(a.join(" "));
  };

  const features = [
    {
      title: 'Text Transformation',
      description:
        'Easily format, convert case, clean and optimize your text with just a few clicks. Tailor to suit your needs and enhance readability.',
    },
    {
      title: 'Multilingual Text Services',
      description:
        'Effortlessly translate text between languages, ensuring effective communication on a global scale.',
    },
    {
      title: 'In-depth Text Analysis',
      description:
        'Understand better through sentiment analysis, readability assessment. Unlock powerful insights to improve your content.',
    },
    {
      title: 'Word and Character Tools',
      description:
        'Count words, characters, paragraphs, and sentences in your text. Compare texts and identify differences and similarities.',
    },
  ];

  return (
    <>
    <span hidden>{document.title = "TextCraftHub - Home"}</span>

      <div
        className="mainSection" id="main"
        style={{ color: props.mode === "dark" ? "whitesmoke" : "#373333" }}
      >
        
        <div className="hero-section my-5">
          <div className="container">
              <div className="col-lg-6 mx-auto d-flex justify-content-center align-items-center">
                  <img
                    src={process.env.PUBLIC_URL + '/text.png'}
                    alt="Text Utilization"
                    className="img-fluid textImage my-5"
                  />
                </div>

              <div className="text-center">
                <h1 className="heroSection hero-heading fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>TextCraftHub</h1>
                <p className="heroSection hero-subheading fs-3 my-4">
                TextCraftHub: Transforming Words, Empowering Ideas!
                </p>
                <a href="#get-started" className="heroSectionBtn btn btn-primary">
                  Get Started
                </a>
              </div>
              
            </div>
        </div>


        <div className="key-features-section featureSection" style={{backgroundColor: props.mode === "dark" ? "#242526" : "#eff0f3"}}>
          <div className="container py-5">
            <h2 className="section-heading my-5 text-center fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>Key Features</h2>
            <div className="row mb-5">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-6">
                  <div className="feature-card featureCard mb-4">
                    <h3 className="feature-title my-4 fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="container mb-3">
          <h2 className="mt-4 text-center fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>
              {props.heading1}
          </h2>
          <div className="textAreaBox position-relative d-md-flex justify-content-center align-items-center" id="get-started">
            <textarea
              className="textAreaCss form-control my-4"
              id="textArea"
              value={text}
              rows="8"
              style={{
                backgroundColor:
                  props.mode === "dark" ? "#32323270" : "#eeeeee",
                color: props.mode === "dark" ? "#e7f6f7" : "#373333"
              }}
              onChange={onChanegeHandler}
            ></textarea>
            <textarea
              className={`textAreaCss2 form-control my-4 ${text.length > 0 ? "#e7f6f7" : "text-muted"}`}
              id="disableTextArea"
              rows="8"
              value={text.length > 0 ? text : `Enter text to Preview`}
              style={{
                backgroundColor:
                  props.mode === "dark" ? "#32323270" : "#eeeeee",
                color: props.mode === "dark" ? "#e7f6f7" : "#373333"
              }}
              disabled
            ></textarea>
            <span className="position-absolute"><button disabled={text.length === 0} className="btn btn-primary" onClick={copyText}>
              Copy
            </button></span>
          </div>
          <button disabled={text.length === 0} className="btn btn-primary" onClick={upperText}>
            UpperCase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={lowerText}>
            LowerCase
          </button>
          <button disabled={text.length === 0} className="btn btn-primary" onClick={removeSpaces}>
            Remove Extra Spaces
          </button>
          <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={clearText}>
            Clear
          </button>
        </div>
      </div>

      <div className="contentSummerySection">
        <div
          className="contentSummeryInside container d-flex justify-content-center align-items-center"
          style={{ backgroundColor: props.mode === "dark" ? "#32323270" : "#eeeeee", color: props.mode === "dark" ? "whitesmoke" : "#373333" }}
        >
          <h5 className="contentSummeryHeading fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>
            Content Summary:
          </h5>
          <div className="contentSummery">
          <span className="contentSummerySpan">
            <strong>
              <i>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} - </i>
            </strong>{"  "}
            Words,{" "}
            <strong>
              <i>{text.length} - </i>
            </strong>{" "}
            Characters
          </span>
          <span>
            <strong>
              <i>
                {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length}
              </i>
            </strong>{" "}
            - Minutes to Read
          </span>
          </div>
        </div>
      </div>


      <div className="final-section" style={{backgroundColor: props.mode === "dark" ? "#242526" : "#eff0f3", color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
        <div className="container text-center py-5">
          <h2 className="section-heading fw-bold pt-5" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>Join TextCraftHub Today</h2>
          <p className="pt-5 pb-3">
            Experience seamless text transformation and unlock the potential of
            effective communication. Join us today and revolutionize the way you
            craft and utilize text.
          </p>
          <a href="#get-started" className="btn btn-primary">
            Get Started
          </a>
        </div>
    </div>
    </>
  );
}
