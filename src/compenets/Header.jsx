import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/Projects"> <h2>Projects</h2></Link>
        <Link to="/Contact"><h2>Contact</h2></Link>
        <Link to="/Resume"><h2>Resume</h2></Link>
      </nav>
    </header>
  );
};

export default Header;
