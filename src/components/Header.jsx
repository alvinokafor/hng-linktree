import Profile from "../assets/alvin-profile.jpeg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="header-content">
        <div id="profile-img">
          <img src={Profile} alt="profile" />
        </div>

        <h3 id='twitter'>retrosearth</h3>

        <h4 id='slack'>Alvin Okafor</h4>
      </section>
    </header>
  );
};

export default Header;
