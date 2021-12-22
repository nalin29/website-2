import React from "react";
import emailjs from 'emailjs-com'
import {ChatIcon} from "@heroicons/react/solid"
import '@sweetalert2/theme-dark'
import Swal from 'sweetalert2/src/sweetalert2.js'

export default function Contact() {
  const [from_name, setName] = React.useState("");
  const [reply_to, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((res) => {
        console.log(res.text);
        Swal.fire({
          icon: 'success',
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text)
        Swal.fire({
          icon:'error',
          title:'Something Went Wrong',
          text: error.text
        })
      });
    e.target.reset();
  };

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40 items-center">
        <ChatIcon className="mx-auto flex w-10 mb-4"/>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="">
          <h2 className="text-white text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="text-center leading-relaxed mb-5">
            If you want to contact me just send an email I would love to talk.
            Hopefully, it won't get sent to junk JK :p.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}