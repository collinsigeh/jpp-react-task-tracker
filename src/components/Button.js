import PropTypes from "prop-types";

const Button = ({color, text, onClickHandler}) => {
  return (
    <button onClick={onClickHandler} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Submit",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default Button;
