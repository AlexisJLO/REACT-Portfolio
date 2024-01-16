import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <Link
          to="https://ancient-retreat-96165-046e407ce051.herokuapp.com/"
          target="_blank"
        >
          <img
            src="./src/assets/projects/Fast Lane Rental.PNG"
            alt="Project 1"
          />
        </Link>

        <h3>Fast Lane Rentals</h3>
        <p>
          Fast Lane Rentals is a car rental app that makes it simpler for you to
          pick a car, rent it and pay for it. All you need to rent a car, is to
          be of leagal driving age and obviously have a driver's license...for
          insurance purposes. This is car rental app meant to make your life a
          tad bit easier.
          <br></br>
          <br></br>
          <i>
            Note: Payment method is for demonstration purposes only. It wont
            actually take any information
          </i>
        </p>
      </div>

      <div className="project 2">
        <Link to="https://jcwarwick.github.io/Group2-Project/" target="_blank">
          <img src="./src/assets/projects/group project.PNG" alt="Project 2" />
        </Link>

        <h3>Movie Search Engine</h3>
        <p>
          In the project I worked with 3 other developers to make a place to
          store your thoughts and ratings of diffrent films and tv series as
          well as save where you streamed them so you never forget when you
          recomend your favorites to your friends. Apis used are: OMDb, The
          Cocktail DB.
        </p>
      </div>
      <div className="project 3">
        <Link to="https://alexisjlo.github.io/Restaurant-Menu/" target="_blank">
          <img src="./src/assets/projects/KFCmenu.PNG" alt="Project 3" />
        </Link>

        <h3>KFC Menu Clone</h3>
        <p>
          An interactive food ordering app with categories for different food
          items. Implemented a shopping cart functionality. Visually appealing
          and responsive layout for a seamless user experience on various
          devices. Utilized JavaScript to manage user interactions, including
          updating the cart and displaying order summaries. Emulated the
          ordering process, providing users with payment methods.
          <br></br>
          <br></br>
          <i>
            Note: Payment method is for demonstration purposes only. It wont
            actually take any information
          </i>
        </p>
      </div>
    </div>
  );
}
