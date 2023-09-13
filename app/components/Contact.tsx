"use client";

import React, { useRef } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
    e.preventDefault();

    // emailjs.sendForm('service_ep40sdp', 'template_s71ml6p', form.current, 'qsnkSq4OLeWrNtSzm');

    e.target.reset();
  };

  return (
    <div id='contact' className='p-6'>
      <div className='my-16'>
      <div className='text-center text-4xl font-bold'>Get in touch</div>
      <div className='text-center text-2xl font-semibold'>Contact us</div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
        <div className="space-y-6">
          <div className='bg-[#121212] p-6 rounded-lg text-center text-white transition duration-300 hover:bg-[#121212] hover:border-primary-variant flex flex-col'>
            <div className='flex justify-center'><MdEmail className='text-2xl mb-4 shadow-lg'/></div>
            <h4 className="text-xl font-semibold">Email</h4>
            <h5 className="text-lg">giannabeautysalon@gmail.com</h5>
            <a href="mailto:elateunisexsalon@gmail.com" target="_blank" rel="noreferrer" className="hover:text-red-600 text-sm inline-block mt-2">Send a message</a>
          </div>

          <div className='bg-[#121212] p-6 rounded-lg text-white text-center transition duration-300 hover:bg-[#121212] hover:border-primary-variant'>
          <div className='flex justify-center'><FaPhoneAlt className='text-2xl mb-4 shadow-lg'/></div>
            <h4 className="text-xl font-semibold">Phone</h4>
            <h5 className="text-lg">+91-78993-05457</h5>
            <a href="tel:+917084040708" target="_blank" rel="noreferrer" className="hover:text-red-600 text-sm inline-block mt-2 transition-all">Call</a>
          </div>
        </div>

        <form
        //  onSubmit={sendEmail} 
         className="flex flex-col justify-center items-center space-y-6">
          <input type="text" name='name' placeholder='Your Full Name' required className="w-full p-6 rounded-lg  border-2 border-primary-variant" />
          <input type="email" name='email' placeholder='Your Email' required className="w-full p-6 rounded-lg border-2 border-primary-variant" />
          <textarea name="message" placeholder='Your Message' required className="w-full p-6 rounded-lg border-2 border-primary-variant"></textarea>
          <div className='flex justify-center items-center text-white bg-[#121212] w-auto h-auto p-3 rounded-lg'><button type='submit'>Send Message</button></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
