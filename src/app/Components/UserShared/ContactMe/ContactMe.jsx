import React , { useState } from 'react';
import { barlow, robotoSlab } from '@/app/config/fonts';

import DefalutLoading from "@/app/config/DefalutLoading/DefalutLoading";
import emailjs from '@emailjs/browser';

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
        <div id="contact" className= {` ${barlow.className} md:mt-12 sm:mt-0 h-screen `}>
            <h1 className={` ${robotoSlab.className} text-2xl font-bold pt-10 mb-5 `}>Send Your Email</h1>
             {/* email input section  */}
             <div className='flex-1 sm:flex-none  flex items-center bg-white text-white px-4 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all font-semibold uppercase'>
              <form
                onSubmit={handleSubmit}
                action="/submit-feedback"
                method="post"
                className="bg-transparent  w-full mx-auto py-10  px-4 rounded-md"
              >
                <div>
                  <label
                    htmlFor="name"
                    className={` ${robotoSlab.className} block text-gray-700 font-bold mb-2 `}
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    required
                    className="w-full px-3 py-2 mb-4 bg-white text-black border border-black rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={` ${robotoSlab.className} block text-gray-700 font-bold mb-2 `}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email_id"
                    name="email"
                    required
                    className="w-full px-3 py-2 mb-4 bg-white text-black border border-black rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your E-mail"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={` ${robotoSlab.className} block text-gray-700 font-bold mb-2 `}
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 mb-4 bg-white text-black border border-black rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="E-mail Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className={` ${robotoSlab.className} block text-gray-700 font-bold mb-2 `}
                  >
                    Feedback:
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows="5"
                    required
                    className="w-full px-3 py-2 mb-4 bg-white text-black border border-black rounded-md focus:outline-none focus:border-purple-900"
                    placeholder="Your FeedBack"
                  ></textarea>
                </div>
                {/* Loading logic ---------------------- */}
                {loading ? (
                  <DefalutLoading />
                ) : (
                  <div className='flex justify-center'>
                  <button
                    type="submit"
                    className="mt-5 flex-1 sm:flex-none text-center flex items-center bg-blue-500 text-white text-sm px-8 py-2 rounded-sm border-2  border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase"
                  >
                    Send
                  </button>
                  </div>
                )}
              </form>
            </div>
        </div>
    );
};

export default ContactMe;