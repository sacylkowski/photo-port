import React, { useState } from "react";

function ContactForm() {
    // setting the fields as empty strings so the input fields are clear
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const { name, email, message } = formState;

    // using the setFormState function to update the formState value for the name property
    function handleChange(e) {
        // taken the value from the input field in the UI with e.target.value
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label> 
                    <input type="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

}


export default ContactForm;