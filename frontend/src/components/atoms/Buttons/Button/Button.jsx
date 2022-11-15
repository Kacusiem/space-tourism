import { Link } from "react-router-dom";
import Tooltip from "../../ToolTip/ToolTip";
import './Button.scss'
const Button = ({ children, to, customClassName, onClick, tooltip }) => {
  if (to) {
    return (
        <Tooltip value={tooltip}>
      <Link to={to} className={`${customClassName} button-styles`}>
        {children}
      </Link>
      </Tooltip>
    );
  } else {
    return (
        <Tooltip value={tooltip}>
      <button onClick={onClick} className={customClassName}>
        {children}
      </button>
      </Tooltip>
    );
  }
};

export default Button;
