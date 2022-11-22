
import Logo from "../../atoms/Logo/Logo";
import NavOptions from "../../atoms/NavOptions/NavOptions";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className={"navBar-wrapper"}>
      <Logo />
      <div className={"nav-line"}></div>
      <NavOptions/>
    </div>
  );
};

export default NavBar;