export default function Resume() {
  return (
    <div className="resume-page">
      <h1 className="resume-title">Technical Skills</h1>
      <div className="resume-container">
        <article>
          <h2>Front-End</h2>
          <ul>
            <li>
              <img src="./src/assets/Tech/HTML5.png" alt="" />
              HTML
            </li>
            <li>
              <img src="./src/assets/Tech/CSS3.png" alt="" />
              CSS
            </li>
            <li>
              <img src="./src/assets/Tech/REACT.png" alt="" />
              React
            </li>
            <li>
              <img src="./src/assets/Tech/JavaScript.png" alt="" />
              Javascipt
            </li>
            <li>
              <img src="./src/assets/Tech/bootstrap-stack.png" alt="" />
              Bootstrap
            </li>
          </ul>
        </article>
        <article>
          <h2>Back-End</h2>
          <ul>
            <li>
              <img src="./src/assets/Tech/node-js-icon-8.jpg" alt="" />
              Node
            </li>
            <li>
              <img src="./src/assets/Tech/express js.png" alt="" />
              Express
            </li>
            <li>
              <img src="./src/assets/Tech/mysql-5.png" alt="" />
              MySQL
            </li>
            <li>
              <img src="./src/assets/Tech/mongodb.png" alt="" />
              MongoDB
            </li>
            <li>
              <img src="./src/assets/Tech/json.png" alt="" />
              JSON
            </li>
          </ul>
        </article>

        <article>
          <h2>Education</h2>
          <p>
            BS Software Developer
            <br /> Western Govern University, Currently Attending
          </p>
          <br />
          <p>
            Continuing and Professional Education Coding Boot Camp
            <br />
            University of Oregon, 2024
          </p>
          <br />
          <p>
            Associates of Oregon Tranfer
            <br />
            Portland Community College, 2023
          </p>
        </article>
      </div>
    </div>
  );
}
