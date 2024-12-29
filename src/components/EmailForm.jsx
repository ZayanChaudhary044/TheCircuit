import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        const service = 'service_oeyiabc';
        const template = 'template_huxg9ss';
        const key = 'GWVIs2zyq1a-d3JXY';

        const temparam = {
            user_email: email,
        };


        emailjs.send(service, template, temparam, key)
        .then((response) => {
            console.log("Sending was successful:", response.text)
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log("Error in sending:", error.text)
        });
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" value={email} onChange = {(e) => setEmail(e.target.value)} className="focus:outline-none w-60 pt-5 ml-2"/>
            <button type="submit" className="border-2 rounded-md p-2 mt-3">Subscribe</button>
        </form>
    )
}

export default Email;
