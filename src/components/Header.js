import PropTypes from "prop-types"
import Button from "./Button"

const Header = (props) => {
    const onClickHandler = () => {
        console.log("Joe")
    }
  return (
    <div className="header">
        <h1>{ props.title }</h1>
        <Button color="green" text="Add" onClickHandler={onClickHandler} />
    </div>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header