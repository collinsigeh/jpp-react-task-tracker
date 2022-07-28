import PropTypes from "prop-types"

const Button = ( props ) => {
  return (
    <div style={{ backgroundColor: props.color }} className="btn">{ props.text }</div>
  )
}

Button.defaultProps = {
    color: "red",
    text: "Submit"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
}


export default Button