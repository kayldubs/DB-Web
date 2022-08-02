import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './contact.css';

const SignUp = ({submitForm}) => {
 //importing functions from useForm.js
    const {handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <div className='form-contact-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Interested in trying DigiBeat?
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='name' className='form-label'>Full Name</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='form-input'
                        placeholder='Enter Your Full Name'
                        value={values.name}
                        onChange={handleChange}
                        />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='form-input'
                        placeholder='Enter Your Email'
                        value={values.email}
                        onChange={handleChange}
                        />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='job' className='form-label'>I am a:</label>
                    <select 
                        type='text' 
                        name='job' 
                        className='form-input'
                        placeholder='Enter Your Job Title'
                        value={values.job}
                        onChange={handleChange}
                        />
                        {/* <option value='Payer'>Payer</option> */}
                    {errors.job && <p>{errors.job}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='organization' className='form-label'>Phone Number</label>
                    <input 
                        type='text' 
                        name='Phone Number' 
                        className='form-input'
                        placeholder='Enter Your Phone Number'
                        value={values.phone}
                        onChange={handleChange}
                        />
                    {errors.organization && <p>{errors.organization}</p>}
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignUp
