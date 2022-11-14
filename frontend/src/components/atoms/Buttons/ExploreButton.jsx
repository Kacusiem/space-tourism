import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import "./ExploreButton.scss";
const ExploreButton = ({ children, customClassName }) => {
  return (

      <Link to={routes.register} className={"explore-link"}>
            <p className={`${customClassName} explore-btn`}>
        {children}
        </p>
      </Link>

  );
};

export default ExploreButton;
