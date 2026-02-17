import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 border rounded"
      ></textarea>
      <button className="bg-indigo-700 text-white px-4 py-2 rounded ">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
