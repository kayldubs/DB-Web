import React, {useState} from 'react';



function ContactForm() {
    
    const [formState, setFormState] = useState({ name: '', email: '', organization:'', jobTitle: ''});
    const { name, email, jobTitle, organization  } = formState;
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
return (
    <section>
        <h1>Interested in trying DigiBeat?</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div> 
                <label htmlFor="name">Full Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="Job Title">Job Title:</label>
                <input type="text" defaultValue={jobTitle} onChange={handleChange} name="jobTitle"/>
            </div>
            <div>
                <label htmlFor="organization">Organization:</label>
                <input type="text" defaultValue={organization} onChange={handleChange} name="organization" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="Email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm;