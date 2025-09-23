import React from "react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-10">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello — drop us a message below.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded"
            placeholder="Your name"
          />

          <label className="font-semibold">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-2 rounded"
            placeholder="you@example.com"
          />

          <label className="font-semibold">Message</label>
          <textarea
            rows="5"
            className="border border-gray-300 p-2 rounded resize-none"
            placeholder="Write your message here..."
          ></textarea>

          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-400 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center text-gray-700">
          <h2 className="text-xl font-bold mb-2 text-orange-500">Our Office</h2>
          <p>Crave Cart HQ</p>
          <p>123 Tasty Street, salem, Tamil Nadu</p>
          <p>India - 636006</p>

          <h2 className="text-xl font-bold mt-6 mb-2 text-orange-500">Reach Us</h2>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@cravecart.com</p>
          <p>🕒 Mon - Sat: 9AM to 9PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
