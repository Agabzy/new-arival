import React, { useState, useEffect } from 'react';
import img from "../../assets/person.png";

// Sample testimonials
const testimonials = [
  {
    name: 'John Doe',
    role: 'Developer',
    testimonial: 'This product has significantly improved my workflow!',
    image: img
  },
  {
    name: 'Jane Smith',
    role: 'Designer',
    testimonial: 'A must-have tool for anyone in the industry.',
    image: img
  },
  {
    name: 'Mike Johnson',
    role: 'Product Manager',
    testimonial: 'Great customer service and very user-friendly.',
    image: img
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="isolate bg-gray-100 px-6 py-24 sm:py-32 lg:px-8 font-poppins" id='reviews'>
       <h2 className='text-center text-4xl'>What people think about us</h2>
    <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md m-4">
      <div className="text-center">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-20 h-20 rounded-full  mx-auto mb-4"
        />
        <p className="text-lg italic mb-4">
          "{testimonials[currentIndex].testimonial}"
        </p>
        <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
        <span className="text-gray-500">{testimonials[currentIndex].role}</span>
      </div>
      <div className="flex mt-6 space-x-4">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSlider;