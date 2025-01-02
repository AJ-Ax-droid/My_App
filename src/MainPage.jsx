import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import App from './App.jsx'
import LoginPage from './Home.jsx'
import Data from './Mydata.jsx';
import Showdata from './ShowMyData.jsx';


function Navbar(params) {
    const [ActivePage, setActivePage] = useState("") // sateting  for current active page 

    const toggleActivePage = (event) => { // rending Active page
        setActivePage(<App />)
        console.log("Active page");
    }
    const toggleMyData = (event) => { // rendering My data page
        setActivePage(<Data />)
        console.log("Mydata page");
    }
    const toggleAboutPage = (event) => { // rendering to About page
        setActivePage(<Showdata />)
        console.log("about page");
    }
    const toggleRoleAccessPage = (event) => { // rendering to role access page
        setActivePage(<App />)
        console.log("role access page");
    }
    const toggleLogout = (event) => { // rendering to role access page
        setActivePage(<LoginPage />)
        console.log("role access page");
    }



    return (
        < >

            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={reactLogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        MySite
                    </a>
                </div>
            </nav>


            <nav  className="nav nav-pills flex-column flex-sm-row"> {/* Navbar look with 4 tabs */}
                
                        <a className="flex-sm-fill text-sm-center nav-link  " onClick={toggleActivePage}   >Home</a>
                   
                        <a className="flex-sm-fill text-sm-center nav-link " onClick={toggleMyData}   >Data</a>
                    
                        <a className="flex-sm-fill text-sm-center nav-link" onClick={toggleAboutPage}   >About</a>
                   
                        <a className="flex-sm-fill text-sm-center nav-link" onClick={toggleRoleAccessPage}   >RoleAcces</a>
                    
                        {/* <li className="nav-item justify-content-end"> */}
                            <a className="flex-sm-fill text-sm-center nav-link" onClick={toggleLogout} >Logout</a>
                        {/* </li> */}
                
            </nav>
            <div className="container mt-3" > {/* showing current page */}
                {ActivePage}
            </div>

        </>

    )
}
export default Navbar;