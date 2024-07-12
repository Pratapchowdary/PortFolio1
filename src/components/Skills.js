import React from "react";
import "./Skills.css"; 

function Skills() {
  return (
    <section className="third" id="skills">
      <h1 id="head">Skills</h1>
      <div className="skills">
        <div className="d-flex m-2">
          <i className="skill fab fa-html5"></i>
          <span>HTML</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-css3-alt"></i>
          <span>CSS</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-js"></i>
          <span>JavaScript</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-c"></i>
          <span>C</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-cuttlefish"></i>
          <span>C++</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-python"></i>
          <span>Python</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-java"></i>
          <span>Java</span>
        </div>
        <div className="d-flex m-2">
          <i className="skill fab fa-bootstrap"></i>
          <span>Bootstrap</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
