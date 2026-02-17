import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Left side: Contact details */}
          <div className="md:w-1/2 p-10 bg-purple-600 text-white">
            <h2 className="text-2xl font-extrabold mb-4">Get in Touch</h2>
            <p className="mb-6">
              Our friendly team is always here to chat. Feel free to reach out
              with any questions.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* {phone icon on contact page } */}
                </svg>
                9918626298
              </p>
              <p className="flex items-center">
                <svg
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Email icon in contact page */}
                </svg>
                edu123@gmail.com
              </p>
              <p className="flex items-center">
                <svg
                  className="h-6 w-6 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Location icon in contact page*/}
                </svg>
                Vibhuti Khand, Lucknow,Uttar Pradesh India
              </p>
            </div>
          </div>

          {/* Right side: Contact form */}
          <div className="md:w-1/2 p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
