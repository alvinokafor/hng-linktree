import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Github from "../assets/github.svg";
import Slack from "../assets/slack.svg";

function Home() {
  const BUTTON_DATA = [
    {
      text: "Twitter Link",
      link: "https://twitter.com/retrosearth/",
      id: "twitter",
    },

    {
      text: "Zuri Team",
      link: "https://training.zuri.team/",
      id: "btn__zuri",
    },

    {
      text: "Zuri Books",
      link: "http://books.zuri.team",
      id: "books",
    },

    {
      text: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=alvinokafor",
      id: "book__python",
    },

    {
      text: "Background Check for Coders",
      link: "https://background.zuri.team",
      id: "pitch",
    },

    {
      text: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "books__design",
    },
  ];

  return (
    <div className="App">
      <Header />
      <section className="btn-section">
        {BUTTON_DATA.map((button) => (
          <Button
            text={button.text}
            link={button.link}
            id={button.id}
            key={button.id}
          />
        ))}

        <Link to='/contact'>
          <Button text="Contact Me" id="contact" />
        </Link>

        <div className="logo-section">
          <div className="git-logo">
            <img src={Github} alt="Github icon" />
          </div>

          <div className="slack-logo">
            <img src={Slack} alt="Slack icon" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
