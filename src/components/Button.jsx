import "./Button.css";

const Button = ({ text, link, id }) => {
  return (
    <a href={link}>
      <button id={id}>{text}</button>
    </a>
  );
};

export default Button;
