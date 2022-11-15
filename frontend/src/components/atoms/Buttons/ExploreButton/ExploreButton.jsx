
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";
import "./ExploreButton.scss";
const ExploreButton = ({ children, customClassName, tooltip }) => {
  return (
      <Link to={routes.login} className={"explore-link"}>
            <p className={`${customClassName} explore-btn`}>
        {children}
        </p>
      </Link>

  );
};

export default ExploreButton;
