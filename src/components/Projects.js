import React from "react";

const projectStyles = {
  projectsSection: {
    backgroundColor: "#f2f2f2",
    padding: "50px 20px",
    textAlign: "center",
  },
  textCenter: {
    marginBottom: "30px",
  },
  heading: {
    fontSize: "30px",
    color: "#9f2c2c",
    textAlign: "center",
  },
  project: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
    textAlign: "left",
  },
  projectTitle: {
    fontSize: "24px",
    color: "#4427AC",
  },
  projectDescription: {
    fontSize: "16px",
    color: "#555",
    marginTop: "10px",
  },
};

function Projects() {
  return (
    <section id="projects" style={projectStyles.projectsSection}>
      <div className="text-align-center" style={projectStyles.textCenter}>
        <h1 style={projectStyles.heading}>Projects</h1>
      </div>

      <div className="project" style={projectStyles.project}>
        <h2 style={projectStyles.projectTitle}>
          <i>Portfolio</i>
        </h2>
        <p style={projectStyles.projectDescription}>
          <i>
            Portfolio is a project worked on during the final year while
            learning ReactJS and NodeJS. This is just done with basic HTML and
            CSS.
          </i>
        </p>
      </div>

      <div className="project" style={projectStyles.project}>
        <h2 style={projectStyles.projectTitle}>
          <i>Login and Registration Form</i>
        </h2>
        <p style={projectStyles.projectDescription}>
          <i>Login and Registration using ReactJS and NodeJS.</i>
        </p>
      </div>
    </section>
  );
}

export default Projects;
// import React from "react";

// function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="text-align-center font-size-20px">
//         <h1 style={{ fontSize: "30px", color: "#4427AC", textAlign: "center" }}>
//           Projects
//         </h1>
//       </div>

//       <div>
//         <h1><i>Portfolio</i></h1>
//         <p>
//           <i>
//             Portfolio is a project worked on during the final year while
//             learning ReactJS and NodeJS. This is just done with basic HTML and
//             CSS.
//           </i>
//         </p>
//       </div>

//       <div className="project">
//         <h2>
//           <i>Login and Registration Form</i>
//         </h2>
//         <p><i>Login and Registration using ReactJS and NodeJS.</i></p>
//       </div>
//     </section>
//   );
// }

// export default Projects;
