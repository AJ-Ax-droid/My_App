import React, { useState } from 'react';
import Showdata from './ShowMyData'; 

function Data() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Gender, setGender] = useState("");
    const [UmailID, setUmailID] = useState("");
    const [UserData, setUserData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            Firstname: FirstName,
            Lastname: LastName,
            Gender: Gender,
            EmailID: UmailID
        };
        setUserData([...UserData, newUser]);
        setFirstName("");
        setLastName("");
        setGender("");
        setUmailID("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 form-group">
                    <label htmlFor="formGroupExampleInput" className="form-label text-start">First Name:</label>
                    <input
                        type="text"
                        value={FirstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="form-control mx-auto w-50"
                        id="formGroupExampleInput"
                    />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="formGroupExampleInput2" className="form-label text-start">Last Name</label>
                    <input
                        type="text"
                        value={LastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="form-control mx-auto w-50"
                        id="formGroupExampleInput2"
                    />
                </div>

                <br />

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        value={UmailID}
                        onChange={(event) => setUmailID(event.target.value)}
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <br />

                <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="G_male"
                        name="gender"
                        value="Male"
                        checked={Gender === "Male"}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label className="form-check-label" htmlFor="G_male">Male</label>
                </div>

                <div className="form-check d-flex align-items-center">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="G_Female"
                        name="gender"
                        value="Female"
                        checked={Gender === "Female"}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label className="form-check-label" htmlFor="G_Female">Female</label>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>

           
            <Showdata data={UserData} />
        </>
    );
}

export default Data;
