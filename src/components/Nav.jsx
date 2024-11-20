import logo from "../assets/images/quizLogo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Quiz logo" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
