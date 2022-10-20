import Profile from "../assets/profile.png";
import Share from "../assets/share.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="header-content">
        <div className="profile-img">
          <img src={Profile} alt="profile" />
        </div>

        <h3>Annette Black</h3>
      </section>

      <div className="share">
        <img src={Share} alt="share icon" />
      </div>
    </header>
  );
};

export default Header;
