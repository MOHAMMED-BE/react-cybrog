import "./Header.css"
import logo from "../../assets/images/logo.png"
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem"
import { Link } from "react-router-dom"
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark text-white fixed-top position-relative">
            <div className="container">
                <Link to="/" className="navbar-category">
                    <img src={logo} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <NavItem className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <a className="nav-link" href="/#">Browse</a>
                        </NavItem>
                        <NavItemDropDown className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Details
                            </a>
                            <ul className="dropdown-menu">
                                <NavItem><a className="dropdown-item" href="/#">Action</a></NavItem>
                                <NavItem><a className="dropdown-item" href="/#">Another action</a></NavItem>
                                <NavItem><a className="dropdown-item" href="/#">Something else here</a></NavItem>
                            </ul>
                        </NavItemDropDown>
                        <NavItem className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </NavItem>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
