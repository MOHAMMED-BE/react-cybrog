import "./Header.css"
import logo from "../../assets/images/logo.png"
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem"

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark text-white fixed-top position-relative">
            <div className="container">
                <a href="https://www.google.com" className="navbar-category">
                    <img src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <NavItem className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.google.com">Home</a>
                        </NavItem>
                        <NavItem className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Browse</a>
                        </NavItem>
                        <NavItemDropDown className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="https://www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Details
                            </a>
                            <ul className="dropdown-menu">
                                <NavItem><a className="dropdown-item" href="https://www.google.com">Action</a></NavItem>
                                <NavItem><a className="dropdown-item" href="https://www.google.com">Another action</a></NavItem>
                                <NavItem><a className="dropdown-item" href="https://www.google.com">Something else here</a></NavItem>
                            </ul>
                        </NavItemDropDown>
                        <NavItem className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Fortnite</a>
                        </NavItem>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
