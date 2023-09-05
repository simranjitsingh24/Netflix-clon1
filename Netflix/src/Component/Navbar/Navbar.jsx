import "./Navbar.css";
import logo from "../../assets/Image/Logonetflix.png";
import search from "../../assets/Image/icons8-search-50.png";
import Bell from "../../assets/Image/icons8-bell-24.png";
import Profile from "../../assets/Image/profilelogo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-link-bar">
          <img src={logo} alt="logo" className="img-logo" />
          <div className="nav-link">
            <a href="#" className="link">
              Home
            </a>
            <a href="#" className="link">
              TV Shows
            </a>
            <a href="#" className="link">
              Movies
            </a>
            <a href="#" className="link">
              New & Popular
            </a>
            <a href="#" className="link">
              My List{" "}
            </a>
            <a href="#" className="link">
              Browser by Language
            </a>
          </div>
        </div>
        <div className="nav-right">
          <img src={search} alt="search" className="img-logo-serch" />
          <p> Childern</p>
          <img src={Bell} alt="Bell" className="img-logo-bell" />
          <img src={Profile} alt="profile" className="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
