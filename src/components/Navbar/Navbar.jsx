import { useContext } from "react";
import { ThemeContext } from "../../styling/theme";

const NavBar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return <>
  <nav className="navbar">
    <ul className="btn-group-spread">

      <li className="navbar-item">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
      </li>

        <a className="btn btn__strong" href="https://www.google.com">
          Google.com
        </a>

      <li className="navbar-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
      </li>

      <li className="navbar-item">
          <button onClick={() => toggleTheme()}>{theme}</button>
      </li>

    </ul>
  </nav>
  </>
}

export default NavBar;