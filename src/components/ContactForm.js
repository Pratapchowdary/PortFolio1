import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    const { name, email, message } = formData;
    console.log(`Sending email to ${email} from ${name}: ${message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container d-flex justify-content-spacebetween">
      <section className="contact-section mr-5" id="contact">
        <h1 id="head">Contact Details</h1>
        <div className="contact-details">
          <div className="contact-info">
            <p>
              <strong>Name:</strong> K .Pratap
            </p>
            <p>
              <strong>Email:</strong> your.email@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1234567890
            </p>
            <p>
              <strong>Address:</strong> 123, Street Name, City, Country
            </p>
          </div>
        </div>
      </section>

      <section id="map" className="map-section mr-5">
        <div className="map-container">
          <h2>Location</h2>
          <iframe
            title="Map"
            width="100%"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124853.3171716323!2d-0.1276254808086281!3d51.507321581925604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce04e445c5%3A0xc77417fa3f8e5f52!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1626138306185!5m2!1sen!2suk"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form id="contactForm" action="#" method="POST">
            <div className="input-group">
              <label htmlFor="name">
                <strong>Name:</strong>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">
                <strong>Email:</strong>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">
                <strong>Message:</strong>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="input-group">
              <button type="button" onClick={sendEmail}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
// import React, { useState } from "react";
// import "./ContactForm.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = () => {
//     const { name, email, message } = formData;
//     console.log(`Sending email to ${email} from ${name}: ${message}`);
   
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="five" id="contact">
//       <h1 id="head">Contact Details</h1>
//       <div className="contact"></div>
//       <h2>Contact Me</h2>
//       <form id="contactForm" action="#" method="POST">
//         <div className="input-group">
//           <label htmlFor="name">
//             <strong>Name:</strong>
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="email">
//             <strong>Email:</strong>
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="message">
//             <strong>Message:</strong>
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleInputChange}
//             required
//           ></textarea>
//         </div>
//         <div className="input-group">
//           <button type="button" onClick={sendEmail}>
//             Send Message
//           </button>
//         </div>
//       </form>
//     </section>
    
//     <section id="contact" className="relative">
//       <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
//         <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//           <iframe
//             width="100%"
//             height="100%"
//             title="map"
//             className="absolute inset-0"
//             frameBorder={0}
//             marginHeight={0}
//             marginWidth={0}
//             style={{ filter: "opacity(0.7)" }}
//             src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//           />
//           <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
//             <div className="lg:w-1/2 px-6">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 ADDRESS
//               </h2>
//               <p className="mt-1">
//                 1/75,Adoni
//               </p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 EMAIL
//               </h2>
//               <a className="text-indigo-400 leading-relaxed">
//                 pratap09@gmail.com
//               </a>
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//                 PHONE
//               </h2>
//               <p className="leading-relaxed">1234567889</p>
//             </div>
//           </div>
//         </div>
        
//       </div>
//     </section>
// }

// export default ContactForm;
