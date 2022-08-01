import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = (props) => {
 const location = useLocation();
    
  return (
    <div className="header">
      <h1>{props.title}</h1>
      {
        location.pathname === "/" &&
        <Button
            color={props.showAddTask ? "red" : "green"}
            text={props.showAddTask ? "Close" : "Add"}
            onClickHandler={() => props.setShowAddTask(!props.showAddTask)}
        />
      }
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
