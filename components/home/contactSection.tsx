"use client";
import React, { useState } from "react";
import { Home, Phone, Mail } from "lucide-react";
import home from "@/public/icons/Home.svg";
import phone from "@/public/icons/Calling.svg";
import mail from "@/public/icons/mail.svg";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Background Building Illustration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-10 w-32 h-64 bg-gray-300 rounded-t-lg"></div>
        <div className="absolute bottom-0 left-48 w-40 h-80 bg-gray-300 rounded-t-lg"></div>
        <div className="absolute bottom-0 right-48 w-36 h-72 bg-gray-300 rounded-t-lg"></div>
        <div className="absolute bottom-0 right-10 w-32 h-96 bg-gray-300 rounded-t-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              <span className="relative inline-block px-2 rounded-md align-baseline">
                {/* Gradient background */}
                <Image
                  src="/images/gradientText.svg"
                  alt="gradient background"
                  fill
                  className="object-cover rounded-md z-0"
                />
                {/* Foreground text */}
                <span className="relative z-10 text-white">Contact</span>
              </span>
              <span className="ml-1">us</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base italic mb-12">
              Kindly contact us via the details below.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Image
                    src={home}
                    alt="home"
                    className="w-6 h-6 text-[#0A5DEC]"
                  />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-gray-800 font-medium">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image src={phone} alt="" className="w-6 h-6 " />
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <a
                      href="tel:+2349020589764"
                      className="text-gray-800 font-medium hover:text-[#0A5DEC] transition-colors">
                      +234 (0) 902 058 9764
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center">
                  <Image src={mail} alt="mail" className="w-6 h-6" />
                </div>
                <div className="flex-1 pt-2">
                  <a
                    href="mailto:support@prypar.com"
                    className="text-gray-800 font-medium hover:text-[#0A5DEC] transition-colors">
                    support@prypar.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Send us a message.
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Kindly fill the form below to send us a message.
            </p>

            <div onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name here"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address here"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              {/* Your Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-medium mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter message here"
                  // rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A5DEC] focus:border-transparent transition-all text-gray-900 placeholder-gray-400 resize-none"
                  required></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-4 bg-[#0A5DEC] cursor-pointer text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                Send Message Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
