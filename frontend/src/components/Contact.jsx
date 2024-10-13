import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const form = useRef();

  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ss53vwf', 'template_ahd4vpf', form.current, '4mGQGpV6GZs7kGSoR',)
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send the message. Please try again later.');
          },
        );
    };

  return (
    <section id='contact'>
      <div className='contact-container'>
        <h1 className='contact-title'>Contact Me</h1>
        <p className='contact-description'>Feel free to reach out if you'd like to collaborate or have any questions!</p>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='your_name' id='name' placeholder='Your Name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='your_email' id='email' placeholder='Your Email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' rows='5' placeholder='Your Message' required></textarea>
          </div>
          <button type='submit' className='contact-btn'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
