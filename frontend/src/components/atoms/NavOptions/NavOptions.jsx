import "./NavOptions.scss";

const NavOptions = () => {
  return (
      <ul className={"navigation-config"}>
        <li className={"nav-option"}>
          <span className={"number-option"}>00</span> Home
        </li>
        <li className={"nav-option"}>
          <span className={"number-option"}>01</span> Destination
        </li>
        <li className={"nav-option"}>
          <span className={"number-option"}>02</span> Crew
        </li>
        <li className={"nav-option"}>
          <span className={"number-option"}>03</span> Technology
        </li>
      </ul>
  );
};

export default NavOptions;
