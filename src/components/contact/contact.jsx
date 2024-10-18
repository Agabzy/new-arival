'use client'

import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const [state, handleSubmit] = useForm("xrbgzddk"); // Formspree form ID

  useEffect(() => {
    let timer;
    if (state.succeeded || submitted) {
      // Hide the success message after 5 seconds
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [state.succeeded, submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.firstName) {
      tempErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!formData.lastName) {
      tempErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message) {
      tempErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const sendDataToDatabase = async () => {
    try {
      const response = await fetch('http://localhost/project/admin/messages.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      // Handle successful database submission
      console.log('Data successfully sent to database:', response.data);
    } catch (error) {
      console.error('Error sending data to database:', error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    
    if (!navigator.onLine) {
      alert("You are currently offline. Please check your internet connection and try again.");
      return;
    }

    if (validate()) {
      await handleSubmit(e); // Send to Formspree
      await sendDataToDatabase(); // Send to your database using axios
      setSubmitted(true); // Set submitted to true on successful validation
    
      // Reset the form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }
      
  };

  useEffect(() => {
    if (state.succeeded) {
      alert("Your message has been sent successfully!");
  
      // Reset the form data after alert is shown
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }
  }, [state.succeeded]);
  

  return (
    <div className="isolate bg-black/10 px-6 py-24 sm:py-32 lg:px-8 font-poppins" id='contact'>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Have a question? Feel free to reach out to us. We are always here for you.
        </p>
      </div>

      <form onSubmit={handleSubmitForm} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.firstName ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.lastName ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.email ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.message ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
          >
            {state.submitting ? 'Submitting...' : "Let's talk"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
