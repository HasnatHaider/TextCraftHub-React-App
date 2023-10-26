import React from "react";

export default function About(props) {
  return (
    <>
     <span hidden>{document.title = "TextCraftHub - About"}</span>
      <div className="container py-5">
        <div className="">
          <h1 className="mb-4 fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>About Us</h1>
          <p className="lead" style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            Welcome to TextUtilize – Your Text Transformation Companion!
          </p>
        </div>

        <div className="my-">
          <p style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            TextUtilize is a versatile online platform that empowers users to
            manipulate, analyze, and transform text effortlessly. Whether you're
            a student, a professional, or just someone seeking to enhance your
            text-related tasks, TextUtilize has you covered.
          </p>
          <p style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            Our mission is to simplify the way people interact with text,
            providing a user-friendly interface and a range of powerful tools to
            make your text-related activities a breeze. We understand that
            effective communication is vital, and our goal is to assist you in
            achieving it with finesse.
          </p>
        </div>

        <div className="my-4">
          <h2 className="my-5 fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>What We Offer:</h2>
          <h4 className="fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>1: Text Transformation Tools</h4>
          <p className="my-4" style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            We provide an array of tools to format, convert case, clean, and
            encrypt/decrypt your text. Customize your text to suit your needs
            easily and efficiently.
          </p>

          <h4 className="fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>2: Uppercase, Lowercase, Remove Extra Space</h4>
          <p className="my-4" style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            Easily convert text to uppercase or lowercase, and remove
            unnecessary spaces within your text, making it clean and consistent.
          </p>

          <h4 className="fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>3: Utility Tools</h4>
          <p className="my-4" style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            Count words, characters, paragraphs, and sentences in your text, and
            compare texts to identify similarities and differences.
          </p>

          <h4 className="fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>4: Secure and Efficient</h4>
          <p className="my-4" style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            TextUtilize values your privacy and security. Your data and
            interactions with our platform are kept secure and confidential.
          </p>
        </div>

        <div className="my-5">
          <h2 className="my-4 fw-bold" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>Our Vision:</h2>
          <p style={{color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
            We envision a world where manipulating and utilizing text is an easy
            and enjoyable experience. We strive to continually enhance and
            expand our platform, providing innovative features that meet the
            evolving needs of our users.
          </p>
        </div>
      </div>
    </>
  );
}
