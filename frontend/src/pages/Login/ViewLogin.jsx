import Image from "../../components/atoms/PageImage/Image";
import "./ViewLogin.scss";
import loginphoto from "../../assets/home/image_login.png";
import { BiArrowBack } from "react-icons/bi";
import Logo from "../../components/atoms/Logo/Logo";
import Button from "../../components/atoms/Buttons/Button/Button";
import { routes } from "../../routes";
const ViewLogin = () => {
  return (
    <>
      <div className={"login-wrapper"}>
      <div className={'logo-place'}><Logo/></div>
        <div className={"max-width-login-wrapper"}>

          <div className={"login-place"}>
            <div className={"left-site-login"}>
              <Button customClassName={"login-back-btn"} to={routes.home} >
                <BiArrowBack size={20} />
                <span className={"login-btn-text"}>Back</span>
              </Button>
              <Image
                alt={"login photo"}
                src={loginphoto}
                customClassName={"login-image"}
              />
              <div className={"login-quote"}>
                If you are in a spaceship that is traveling at the speed of
                light, and you turn on the headlights, does anything happen?{" "}
                <em className={"quote-author"}>~ Steven Wright</em>
              </div>
            </div>
            <div className={"right-site-login"}>
              <div className={"login-brand"}>
                <Logo />
                <span className={"login-brand-name"}>Space tourism</span>
              </div>
              <div>Welcome to Space tourism</div>
              <div>form logowania + btn</div>
              <div>nie masz konta zarejestruj sie juz dzisija</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewLogin;
