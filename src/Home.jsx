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
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div >
        </>
    )
}



export default LoginPage;