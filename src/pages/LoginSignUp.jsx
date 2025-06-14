import React from 'react'
import './CSS/loginsignup.css'

const LoginSignUp = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an accoutn: <span>Login here</span>
                    <p className="loginsignup-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By Continuing, I agree to use the terms of use & privacy policy</p>
                    </p>
                </p>
            </div>
        </div>
    )
}

export default LoginSignUp
