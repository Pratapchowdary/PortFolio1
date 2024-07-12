import React, { useEffect } from "react";
import Typed from "typed.js"; // Import Typed.js library

function Home() {
  useEffect(() => {
    var typed = new Typed(".changing", {
      strings: ["Coder", "Web Developer", "Software Developer"],
      typeSpeed: 140,
      backSpeed: 140,
      loop: true,
    });

   
    return () => {
      typed.destroy();
    };
  }, []); 

  return (
    <section id="home" className="home">
      <div className="content">
        <h2>
          <i>Hello, It's Me</i>
        </h2>
        <h1 style={{ fontSize: "30px" }}>
          <i>K PRATAP</i>
        </h1>
        <h2 style={{ fontSize: "25px", color: "black" }}>
          <i> And I'm a </i>
          <span className="changing">
            <i>Frontend Developer</i>
          </span>
        </h2>
        <p style={{ fontSize: "20px", color: "black", textAlign: "center" }}>
          Good experience in web design and development knowledge, producing
          quality work.
        </p>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/kamma-pratap-b02874258">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/Pratapchowdary">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Home;


// import React from "react";
// import Typed from "typed.js";
// function Home() {
//   var typed =new Typed(".changing",{
//     strings:["Coder","Chef","web Developer","Software Developer"] ,
//     typespeed:140,
//     backspeed:140,
//     loop:true
//   })
//   return (
//     <section id="home" className="home">
//       <div className="content">
//         <h2>
//           <i>Hello, It's Me</i>
//         </h2>
//         <h1>
//           <i>K PRATAP</i>
//         </h1>
//         <h2>
//           <i> And I'm a </i>
//           <span className="changing">
//             <i>FrontEnd Developer</i>
//           </span>
//         </h2>
//         <p style={{ fontSize: "20px", color: "black", textAlign: "center" }}>
//           Good experience in web design and development knowledge, producing
//           quality work.
//         </p>
//       </div>
//       <div className="icon">
//         <a href="https://www.linkedin.com/in/kamma-pratap-b02874258">
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a href="#">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://github.com/Pratapchowdary">
//           <i className="fab fa-github"></i>
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Home;
