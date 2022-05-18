import React, { useState } from 'react';
import SignUp from './SignUp';
import Success from './Success';
import './contact.css';
import formIMG from '../../assests/imgs/input.jpeg'


function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function subitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>x</span>
        <div className='form-content-left'>
            <img src={formIMG} alt='talking people' 
            className='form-img' />
        </div>
        {!isSubmitted ? <SignUp submitForm={subitForm} /> 
            : <Success />}
        </div>
        </>
    );
};

export default Form
