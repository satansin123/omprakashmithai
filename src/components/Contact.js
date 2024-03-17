import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    emailContent: '',
  });

  return (
    <div className="contact bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-6xl font-bold mb-10">Contact Us</h2>
          <p className="mb-4 text-gray-600">
            We're delighted to assist you with all your sweet desires. Reach out to Sri Balaji Omprakash Mithai Bhandar for any inquiries, orders, or to simply share your sweet experiences with us.
          </p>
          <div className="flex justify-center ">
            <button className="whatsapp-button py-2 px-4 bg-yellow-600 text-white font-bold rounded-full inline-flex items-center justify-center">
              <i className="fas fa-phone-alt mr-2"></i>9121470024
            </button>
            
            <button className="whatsapp-button py-2 px-4 bg-yellow-600 text-white font-bold rounded-full inline-flex items-center justify-center">
              <i className="fas fa-phone-alt mr-2"></i>9989237385
            </button>
          </div>
        </div>

        <div className="mb-4">
          <p className="footer-text mb-4 text-gray-600">Hours</p>
          <p className="font-bold">Open today 07:00 am - 10:30 pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
