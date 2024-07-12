import React from "react";

function About() {
  return (
    <section id="about" className="second">
      <div className="content2">
        <h1 id="About">About Me</h1>
        <h1 className="heading">BTECH</h1>
        <h2
          className="clgname"
          style={{ fontSize: "15px", color: "#4427AC", textAlign: "center" }}
        >
          <i>ANNAMACHARYA INSTITUTE OF TECHNOLOGY AND SCIENCES, RAJEMPETA</i>
        </h2>
        <h4 style={{ fontSize: "30px", color: "#4427AC", textAlign: "center" }}>
          <i>COMPUTER SCIENCE ENGINEERING</i>
        </h4>
        <h4 style={{ marginTop: "10px", fontSize: "15px" }}>Kadapa.</h4>
        <p style={{ fontSize: "30px", color: "##000000", textAlign: "center" }}>
          <i>
            I am a dedicated and passionate web developer with a strong
            background in HTML, CSS, and JavaScript. With a keen eye for design
            and a commitment to creating engaging and user-friendly websites.
          </i>
        </p>
        <p style={{ fontSize: "30px", color: "##000000", textAlign: "center" }}>
          <i>
            I am motivated to continuously learn and stay up-to-date with the
            latest industry trends and technologies.
          </i>
        </p>
      </div>
    </section>
  );
}

export default About;
