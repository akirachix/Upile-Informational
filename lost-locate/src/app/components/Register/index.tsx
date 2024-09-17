'use client';

import React from 'react';
import Image from 'next/image';

const RegistrationForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="relative w-full max-w-md aspect-[2/1]">
          <Image
            src="/images/upile_logo.png"
            alt="LOST LOCATE Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#f5f5dc] flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-[#8B4513] text-2xl font-bold mb-8 text-center">Register</h2>
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Jimin"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Mutava"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="jimin@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="phone">Enter Phone Number:</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="+254"
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2" htmlFor="role">Role</label>
              <select
                id="role"
                className="w-full p-2 border border-gray-300 rounded bg-white"
              >
                <option>Police</option>
                <option>Mortuary Attendant</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-2 px-4 rounded hover:bg-[#A0522D] transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex-col {
            flex-direction: column;
          }
          .md\\:w-1\\/2 {
            width: 100%;
          }
          .md\\:flex-row {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .p-8 {
            padding: 1rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .mb-8 {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationForm;
