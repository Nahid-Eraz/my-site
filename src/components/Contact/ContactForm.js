import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e2lj7oo', 'template_n93gqf4', e.target, 'user_R5nKp0DugVAFOAioj8izY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name >>" name="from_name" required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address >>" name="email" required />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject >>" name="subject" required />
                </div>
                <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message >>" name="message" required></textarea>
                </div>
                <div className="form-group text-center">
                    <input type="submit" className="btn effect01" value="Send Message"/>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;