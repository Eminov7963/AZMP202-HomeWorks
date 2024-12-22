import React from "react";
import CVDownloadButton from "./index.jsx"; // İndirme butonunu import ediyoruz

const CVPage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <header style={{ textAlign: "center" }}>
        <h1 style={{ color: "#c24705" }}>Emin Eminov</h1>
        <p style={{ fontSize: "1.1rem" }}>Web Developer | React Enthusiast</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with expertise in creating responsive
          and dynamic web applications using technologies like React,
          JavaScript, and CSS. I enjoy solving problems and creating intuitive
          user interfaces.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Computer Science Bachelor's Degree</strong> - University of
            XYZ (2017 - 2021)
          </li>
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Junior Front-End Developer</strong> - ABC Tech (2022 -
            Present)
            <ul>
              <li>
                Developed responsive web applications using React and Redux
              </li>
              <li>
                Collaborated with the UI/UX team to create seamless user
                experiences
              </li>
            </ul>
          </li>
          <li>
            <strong>Intern Developer</strong> - XYZ Corp (2021 - 2022)
            <ul>
              <li>
                Assisted in building and maintaining websites using HTML, CSS,
                and JavaScript
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>Git & GitHub</li>
          <li>Node.js (Basic)</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: emin@example.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <section style={{ textAlign: "center" }}>
        <CVDownloadButton /> {/* İndirme Butonu */}
      </section>
    </div>
  );
};

export default CVPage;
