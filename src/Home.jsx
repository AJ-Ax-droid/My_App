import React, { useState } from 'react'
import App from './App.jsx'
import Navbar from './MainPage.jsx';

function LoginPage() {
    const [renderP, setNavbar] = useState("");//declaring constant for for render other page
    const [UserName, setUserName] = useState("Enter your user Name")// declaring const for User name 
    const [Password, setPassword] = useState("")// declaring const for Password 

    const renderAppPage = () => { // event function for rendring set App Page
        setNavbar(<Navbar />);
    };

    const UpdateUserNAme = (event) => { // event function for rendring set App Page
        setUserName(event.target.value);
    };

    const UpdatePassword = (event) => { // event function for rendring set App Page
        setPassword(event.target.value);
    };

    function verifydata(params) {
        if (UserName == "Mohan" && Password == "Mohan123") {
            renderAppPage();
        }
        else {
            alert("Enter Correct ID and password ");
        }
    }

    return (
        <>
            {/* {renderP} commented for now  */}
            {/*returning main Html view for Login */}
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >
        </>
    )
}



export default LoginPage;