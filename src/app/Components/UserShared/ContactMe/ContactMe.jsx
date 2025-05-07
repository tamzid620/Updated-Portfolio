import React , { useState } from 'react';
import { barlow, robotoSlab } from '@/app/config/fonts';

import DefalutLoading from "@/app/config/DefalutLoading/DefalutLoading";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


emailjs.init("PIOjzCl1ftxF_58QU");

const ContactMe = () => {

    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
  
      const params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        feedback: document.getElementById("feedback").value,
      };
      emailjs
        .send("service_ajtda09", "template_42ulb2t", params)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email Sent Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(false);
        })
        .catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Email Sending Failed",
            text: error.text,
            showConfirmButton: true,
          });
          setLoading(false);
        });
    };

    return (
        <div className= {` ${barlow.className} md:mt-12 sm:mt-0 `}>
            <h1 className={` ${robotoSlab.className} text-2xl font-bold mb-5 `}>Send Your Email</h1>
             {/* email input section  */}
             <div >
              <form
                onSubmit={handleSubmit}
                action="/submit-feedback"
                method="post"
                className="bg-transparent shadow-lg w-full mx-auto p-4  rounded-md"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    required
                    className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email_id"
                    name="email"
                    required
                    className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your E-mail"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="E-mail Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Feedback:
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="5"
                    required
                    className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your FeedBack"
                  ></textarea>
                </div>
                {/* Loading logic ---------------------- */}
                {loading ? (
                  <DefalutLoading />
                ) : (
                  <button
                    type="submit"
                    className="w-[85px] px-[0px] py-[8px] rounded-sm text-white mt-3
              bg-gradient-to-t from-indigo-900 to-purple-500
              shadow-lg shadow-gray-800
               hover:from-purple-500 hover:to-indigo-900"
                  >
                    Send
                  </button>
                )}
              </form>
            </div>
        </div>
    );
};

export default ContactMe;