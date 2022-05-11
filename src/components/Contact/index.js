import React from 'react';

function ContactForm() {
return (
    <section>
        <h1>Interested in trying DigiBeat?</h1>
        <form id="contact-form">
            <div>
                <label htmlFor="Full Name">Full Name:</label>
                <input type="text" name="Full Name"/>
            </div>
            <div>
                <label htmlFor="Job Title">Job Title</label>
                <input type="text" name="Job Title"/>
            </div>
            <div>
                <label htmlFor="Organization">Organization:</label>
                <input type="text" name="Organization"/>
            </div>
            <div>
                <label htmlFor="Email">Email:</label>
                <input type="text" name="Email" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default ContactForm;