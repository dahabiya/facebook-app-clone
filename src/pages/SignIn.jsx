import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Provider/UserProvider';

import '../styles/SignIn.css'


function SignIn() {

    const { setUserContext: signInContext } = useUser();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });



    function handleChange(event) {
        const { name, value } = event.target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        signIn(userInfo);
    }

    async function signIn(userInfo) {

        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login",
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                 projectId: 'shxzzm8fbs7u',
                },
        
               body: JSON.stringify({
               email: userInfo.email,
               password: userInfo.password,
               appType: 'facebook',
               }),
           }
        );
        if (response.ok) {
        const data = await response.json();
        const { token, data: { name } } = data;

        console.log({ response, data, name });

        sessionStorage.setItem('authToken', token);
        sessionStorage.setItem('userInfo', JSON.stringify(name));

        console.log(token);

        signInContext(token);
        navigate('/homepage'); 
        } else {
        // Handle unsuccessful response (e.g., show an error message)
        console.error("SignUp Failed", response.status, response.statusText);
        }
        } catch (err) {
        // Handle errors that occurred during the fetch or JSON parsing
        console.error(err.message);
        }
        }
       
    return (
        <div>
            <div className='facebook'>facebook</div>
            <form onSubmit={handleSubmit} className='signin-container'>

            {/* <div className='div1'>Login to your account</div> */}
            
                <div>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={userInfo.email}
                    onChange={handleChange}
                    className='signin-input' 
                    placeholder='Email address or phone number'
                />
                </div>
               
                <div>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={userInfo.password}
                    onChange={handleChange}
                    className='signin-input'
                    placeholder='Password'
                />
                </div>
                
                <div><input type='submit' value='Log in' className='signin-btn' /></div>

                <div className='fgt-pswd'>Forgotten password?</div>

                <div className='signin-line'></div>

                <button  className="signup-link" onClick={() => navigate('/signup')} >Create new account</button>
                

                {/* <input type='submit' value='Sign In' onClick={() => navigate('/')}/>
                <p>Don't have an account?</p>
                <button onClick={() => navigate('/signup')} >SignUp here!</button> */}
            </form>
        </div>
    )
}

export default SignIn