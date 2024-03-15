import React, { useState } from 'react'
import { useUser } from '../Provider/UserProvider';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/SignUp.css'

function SignUp() {

    const { setUserContext: signUpContext } = useUser()
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        name: '',
        fname:'',
        email: '',
        password: ''
    });



    function handleChange(event) {
        const { name, value } = event.target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        signUp(userInfo)
    }

    async function signUp(userInfo) {

        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup",
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                 projectId: 'shxzzm8fbs7u',
                },
        
               body: JSON.stringify({
               name: userInfo.name,
               email: userInfo.email,
               password: userInfo.password,
               appType: 'facebook',
               }),
           }
        );
        
        if (response.ok) {
        const data = await response.json();
        const { token, data: { name } } = data;
        //console.log({ response, data, name });

        sessionStorage.setItem('authToken', token);
        sessionStorage.setItem('userInfo', JSON.stringify({ name }));
        
        // Assuming signUpContext and navigate functions are defined elsewhere
        signUpContext(token);
        navigate('/homepage'); // Replace with your actual navigation logic
        } else {
        // Handle unsuccessful response (e.g., show an error message)
        console.error("SignUp Failed", response.status, response.statusText);
        }
        } catch (err) {
        // Handle errors that occurred during the fetch or JSON parsing
        console.error(err.message);
        }
        }
       //console.log(userInfo)
    return (
        <section >
            
            <div className='facebook'>facebook</div>

            <form onSubmit={handleSubmit} className='signup-container'>
            <div className='div2'>Create a new account</div>
            <div className='name-div'> 
              
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={userInfo.name}
                    onChange={handleChange}
                    className='signup-name-input  input' 
                    placeholder='first name'
                />
               
                <input
                    type='text'
                    name='fname'
                    id='fname'
                    value={userInfo.fname}
                    onChange={handleChange}
                    className='signup-name-input input' 
                    placeholder='Surname'
                />
                   
            </div>
                
            <div>
            <input
                    type='text'
                    name='email'
                    id='email'
                    value={userInfo.email}
                    onChange={handleChange}
                    className='signup-input  input'
                    placeholder='Email'
                />
            </div>
                
                <div>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={userInfo.password}
                    onChange={handleChange}
                    className='signup-input  input'
                    placeholder='Password'
                />
                </div>
                <div>

                <div className='gender-container'>
                    <div className='genders gpad'>Gender</div>
                    <div className='genders-container'>
                        <div className='gender'>
                        <label for="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male" className='radio'/>
                        </div>

                        <div className='gender'>
                        <label for="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female" className='radio'/>
                        </div>

                        <div className='gender'>
                        <label for="other">Other</label>
                        <input type="radio" id="other" name="gender" value="other" className='radio'/>
                        </div>  
                    </div>
                </div> 
                
                <input type='submit' value='Sign up' className='signup-btn'/>
                <div className='acct-already'>
                    <Link to='/' className='acct-already-link'>Already have an account?</Link></div>
                </div>
            </form>
        </section>
    )
}

export default SignUp