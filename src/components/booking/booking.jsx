'use client'

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from "../../assets/book-img.png";
import axios from 'axios';
import {servicesData} from "../Services/Services"


function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [state, handleSubmit] = useForm("mpwzanew"); // Formspree form ID

   // State for success message

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
  }, [state.succeeded || submitted]);

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
    if (!formData.service) {
      tempErrors.service = 'Please select a service';
      valid = false;
    }
    if (!formData.date) {
      tempErrors.date = 'Date is required';
      valid = false;
    }
    if (!formData.time) {
      tempErrors.time = 'Time is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const sendDataToDatabase = async () => {
    try {
      const response = await fetch('http://localhost/project/admin/booking.php',{
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
      // Show an alert if the user is offline
      alert("You are currently offline. Please check your internet connection and try again.");
      return;
    }

    if (validate()) {
      await handleSubmit(e); // Send to Formspree
      await sendDataToDatabase();
      setSubmitted(true); // Set submitted to true on successful validation

      // Reset the form data
      setFormData({
        firstName: '',
    lastName: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
      });
    }
  };
  useEffect(() => {
    if (state.succeeded) {
      // Alert the user when the form is submitted successfully
      alert("Your booking has been sent successfully!");

       // Reset the form data
       setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  
  return (
    <div className="isolate bg-gray-100 px-6 py-24 sm:py-32 lg:px-8 font-poppins" id='booking'>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <div>
          <div className="mx-auto max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book a Service</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Please provide your details below to book an appointment.
            </p>
          </div>

          {/* Display success message if form is submitted successfully */}
          {/* {submitted && (
            <div className="text-green-500 text-center lg:text-left mb-4">
              Your booking has been submitted successfully!
            </div>
          )} */}

          <form action='https://formspree.io/f/mpwzanew' method='post' onSubmit={handleSubmitForm} className="mx-auto mt-10 max-w-xl lg:mt-16 lg:max-w-full">
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
                <label htmlFor="service" className="block text-sm font-semibold leading-6 text-gray-900">
                  Select Service
                </label>
                <div className="mt-2.5">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.service ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
                  >
                   
                    <option value="">Choose a service...</option>
                    {servicesData.map((data) =>(
                     <option value={data.title}>{data.title}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-semibold leading-6 text-gray-900">
                  Select Date
                </label>
                <div className="mt-2.5">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.date ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
                  />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold leading-6 text-gray-900">
                  Select Time
                </label>
                <div className="mt-2.5">
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${errors.time ? 'ring-red-500' : 'ring-gray-300'} focus:ring-2 focus:ring-indigo-300 sm:text-sm sm:leading-6`}
                  />
                  {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Additional Message (Optional)
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
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src={Image}  Replace with your image URL
            alt="Service Illustration"
            className="w-full h-[700px] rounded-lg shadow-lg mt-10 " // Ensure the image is responsive
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;




