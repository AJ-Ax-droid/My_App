import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import LoginPage from './Home.jsx'

function Navbar(params) {
    const [ActivePage, setActivePage] = useState("") // sateting  for current active page 

    const toggleActivePage = (event) => { // rending Active page
        setActivePage(<LoginPage />)
        console.log("Active page");
    }
    const toggleMyData = (event) => { // rendering My data page
        setActivePage(<App />)
        console.log("Mydata page");
    }
    const toggleAboutPage = (event) => { // rendering to About page
        setActivePage(<LoginPage />)
        console.log("about page");
    }
    const toggleRoleAccessPage = (event) => { // rendering to role access page
        setActivePage(<App />)
        console.log("role access page");
    }



    return (
        <>
            <div> {/* Navbar look with 4 tabs */}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link " onClick={toggleActivePage}   >Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={toggleMyData}   >Data</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={toggleAboutPage}   >About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={toggleRoleAccessPage}   >RoleAcces</a>
                    </li>
                </ul>
            </div>
            <div> {/* showing current page */}
            {ActivePage} 
            </div>

        </>

    )
}
export default Navbar;