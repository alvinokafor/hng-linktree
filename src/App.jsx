import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Github from "../src/assets/github.svg";
import Slack from "../src/assets/slack.svg";

function App() {

  return (
    <div className="App">
      <Header />
      <section className="btn-section">
        <Button />
        <Button />
        <Button />

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

export default App;
