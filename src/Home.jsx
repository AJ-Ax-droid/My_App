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

    return (<>
        {renderP}
        {/*returning main Html view for Login */}
        <div>

            <table>
                <tbody>

                    <tr>
                        <th>
                            <label htmlFor="UserName">Enter your User name :</label>
                        </th>
                        <th>
                            <textarea name="enter text here" id="UserName" onChange={UpdateUserNAme}></textarea>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="password">Enter your Password: </label>

                        </td>
                        <td>
                            <input type="password" name="password" id="password" onChange={UpdatePassword} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={verifydata} >submit</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </>
    )
}



export default LoginPage;