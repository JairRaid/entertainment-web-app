import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <header className="menu-bar">
      <h1>
        <img src="/assets/logo.svg" alt="Logo" />
      </h1>
      <menu>
        <Link to={"/"} className={location.pathname === "/" ? "is-active" : ""}>
          <img src="/assets/icon-nav-home.svg" alt="Home icon" />
        </Link>
        <Link
          to={"/movies"}
          className={location.pathname === "/movies" ? "is-active" : ""}
        >
          <img src="/assets/icon-nav-movies.svg" alt="Movies icon" />
        </Link>
        <Link
          to={"/series"}
          className={location.pathname === "/series" ? "is-active" : ""}
        >
          <img src="/assets/icon-nav-tv-series.svg" alt="TV Series icon" />
        </Link>
        <Link
          to={"/bookmark"}
          className={location.pathname === "/bookmark" ? "is-active" : ""}
        >
          <img src="/assets/icon-nav-bookmark.svg" alt="Bookmarked icon" />
        </Link>
      </menu>
      <div className="avatar">
        <img src="/assets/image-avatar.png" alt="avatar image" />
      </div>
    </header>
  );
}

export default NavBar;
