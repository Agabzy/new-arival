import React from 'react';
import Headphone from '../../assets/headphone.png';
import Headphone2 from '../../assets/headphone2.png';
import Headphone3 from '../../assets/headphone3.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-24" id='about'>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About New Arrival GSM World</h1>
          <p className="text-lg text-gray-600">
            Your ultimate destination for high-quality phone and laptop accessories. 
            Elevate your tech experience with our latest arrivals.
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Headphone} alt="Our Team" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
              <p className="text-gray-600 mt-4">
                New Arrival GSM World started with a passion for tech. From humble beginnings, 
                we have grown into a trusted brand known for delivering the latest and best accessories for phones and laptops.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Headphone2} alt="Phone Accessories" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Phone Accessories</h2>
              <p className="text-gray-600 mt-4">
                Discover a wide range of phone accessories, from protective cases to stylish covers, 
                chargers, and more. Our products are designed to meet all your needs.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Headphone3} alt="Laptop Accessories" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">Laptop Accessories</h2>
              <p className="text-gray-600 mt-4">
                Our selection of laptop accessories ensures that you stay productive and stylish. 
                From sleek sleeves to high-performance chargers, we have it all.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Join Our Journey</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with our latest arrivals and special offers. Let’s make every gadget you own even better!
          </p>
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700"><a href="#booking">
            Book a section with us
          </a></button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
