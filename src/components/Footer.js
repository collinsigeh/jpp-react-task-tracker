import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        Copyright &copy; 2021<br />
        <Link to="/about">About</Link>
    </div>
  )
}

export default Footer