import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
    
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Button
        color={props.showAddTask ? "red" : "green"}
        text={props.showAddTask ? "Close" : "Add"}
        onClickHandler={() => props.setShowAddTask(!props.showAddTask)}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
