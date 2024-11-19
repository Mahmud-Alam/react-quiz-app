import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <h3>Md Mahmud Alam</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
