import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Footer from './Components/Footer';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggle = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#18191a';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title = "TextCraftHub" about = "About Us" mode={mode} toggle={toggle} />
        <Alerts alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={
          <TextArea sAlert={showAlert} heading1 = "Transform Your Text with Ease" mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
