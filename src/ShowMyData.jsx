import React from 'react';

function Showdata({ data = [] }) { // Default value for data is an empty array
    return (
        <div>
            <h2>User Data</h2>
            {data.length > 0 ? ( // Check if data has elements
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.Firstname}</td>
                                <td>{user.Lastname}</td>
                                <td>{user.Gender}</td>
                                <td>{user.EmailID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p> // Message when no data exists
            )}
        </div>
    );
}

export default Showdata;
