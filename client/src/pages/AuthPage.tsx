import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Eye from '../assets/eye.png';
import Email from '../assets/email.png';
import Name from '../assets/name.png';
import "../scss/AuthPage.scss";

const AuthPage = () => {
    let [logInState,setLogInState]=useState(true);
    return (
        <section className="Auth">
            <div className="logo">
                <img src={Logo} alt="logo"/>
                <h2>Traveller's Bundle</h2>
            </div>
            <div className="auth-box">
                {logInState && <h1>Welcome back...</h1>}
                {!logInState && <h1>Create Your Account...</h1>}
                {!logInState && <div className="userpic-input">
                    <div className="userpic">
                        M
                    </div>
                </div>}
                <input type="file" style={{display:"none"}}/>
                {!logInState && <div className="input-box">
                    <input type="text" placeholder="Name"/>
                    <img src={Name} alt="name"/>
                </div>}
                <div className="input-box">
                    <input type="email" placeholder="Email"/>
                    <img src={Email} alt="email"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password"/>
                    <img src={Eye} alt="eye"/>
                </div>
                {logInState && <button>Login</button>}
                {!logInState && <div className="hori">
                    <button>Signup</button>
                    <button>Change Pic</button>
                </div>}
                {logInState && <p>Don't have an account yet? <span onClick={()=>setLogInState(!logInState)}>Create One</span></p>}
                {!logInState && <p>Have An Account! <span onClick={()=>setLogInState(!logInState)}>login here</span></p>}
            </div>            
        </section>
    );
};

export default AuthPage;