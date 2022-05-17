import React from 'react'
import useForm from './useForm'

function SignUp() {
    const {handleChange, values, handleSubmit} = useForm();
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
                </div>
                <div className='form-inputs'>
                    <label htmlFor='job' className='form-label'>Job Title</label>
                    <input 
                        type='text' 
                        name='job' 
                        className='form-input'
                        placeholder='Enter Your Job Title'
                        value={values.job}
                        onChange={handleChange}
                        />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='organization' className='form-label'>Organization</label>
                    <input 
                        type='text' 
                        name='organization' 
                        className='form-input'
                        placeholder='Enter Your Organization'
                        value={values.organization}
                        onChange={handleChange}
                        />
                </div>
                <button className='form-input-btn' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SignUp
