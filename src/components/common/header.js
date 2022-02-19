import React from "react";
import Menu from "./menu/menu";
import logo from "../../images/icon.png";
import { Link } from "gatsby";
import Hamburger from "./menu/hamburger";
import MenuMobile from "./menu/mobile-menu";
import { slide as MobileMenu } from "react-burger-menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      visibilityClass: "",
    };
  }

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 150) {
      if (visibilityClass !== "filled") {
        this.setState({ visibilityClass: "filled" });
      }
    } else {
      if (visibilityClass === "filled") {
        this.setState({ visibilityClass: "" });
      }
    }
  };

  toggleMenu = (menuActive) => {
    this.setState((prevState) => ({
      menuActive: !prevState.menuActive,
    }));
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { visibilityClass } = this.state;
    return (
      <nav className={`header ${visibilityClass}`}>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="yah logo" className="logo" />
          </Link>
          <Menu />
        </div>
      </nav>
    );
  }
}

export default Header;
