

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [details, setDetails] = useState({
    email: "",
    name: "",
    subject:"",
    body:""
  });

  const handleonChange = (e) => {
// console.log(e.target.value);
setDetails({...details,[e.target.name]:e.target.value}); // spreed operator
console.log(details);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzdoelk', 'template_n0y7vbo', form.current, 'UkQLO5R4DqtxyQGNz')
      .then((result) => {
          console.log(result.text);
          if (result.text.toLocaleLowerCase() =='ok') {
            Swal.fire('Success', 'Record submitted successfully', 'success');
          }
      }, (error) => {
        Swal.fire('Error', 'Record not submitted', 'error');
          console.log(error.text);
      });
      //here the form cleared
      e.target.reset();
  };

  return (
    <section className='container'>
    <form ref={form} onSubmit={sendEmail}>
      <legend className='border border-primary'>
      <div>
      <label className='form-label'>Name</label>
      <input className='form-control' type="text" name="name" onChange={handleonChange}/>
      </div>
      <div>
      <label className='form-label'>Subject</label>
      <input className='form-control' type="text" name="subject" onChange={handleonChange} />
      </div>
      <div>
      <label className='form-label'>Email</label>
      <input className='form-control' type="email" name="user_email" onChange={handleonChange} />
      </div>
      <div>
      <label className='form-label'>Message</label>
      <textarea name="body"  className='form-control' onChange={handleonChange}/>
      </div>

      <input className='form-control btn btn-primary' type="submit" value="Send" />
      </legend>
    </form>
    </section>
  );
};
 export default Contact;