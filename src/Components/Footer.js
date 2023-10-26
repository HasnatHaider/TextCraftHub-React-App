import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <>
     <footer className={`footer navbar-${props.mode}`} style={{backgroundColor: props.mode === "dark" ? "#242526" : "#eff0f3", color: props.mode === "dark" ? "#e7f6f7" : "#373333"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{ color: props.mode === "dark" ? "#09d0a9" : "#373333" }}>
            <p>&copy; 2023 TextCraftHub. All rights reserved.</p>
          </div>
          <div className="col-lg-6 text-lg-start">
            <ul className="navbar-nav footer-links">
                <li className="nav-item">
                <Link className="nav-link navLink1" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              
              {/* Add more footer links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer> 
    </>
  )
}
