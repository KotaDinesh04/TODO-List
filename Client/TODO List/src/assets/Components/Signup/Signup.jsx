import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("EMAIL:", email, "PASSWORD:", password);
    };

    return (
        <div>
            <h2 className='heading'>SignUp</h2>
            <div className='form'>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input id="email" className="signup-input" type='email' placeholder='Enter valid email id' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <div className="half-width">
                            <label htmlFor="firstName">First Name:</label>
                            <input id="firstName" className="signup-input" type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                        </div>
                        <div className="half-width">
                            <label htmlFor="lastName">Last Name:</label>
                            <input id="lastName" className="signup-input" type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="signup-input" type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input id="confirmPassword" className="signup-input" type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    </div>
                    <button className="button-input" type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
