import HomePageContent from "../../components/organisms/HomePageContent";
import TemplateMain from "../../components/templates/TemplateMain/TemplateMain";
import "./ViewHome.scss";

const ViewHome = () => {
  return (
    <TemplateMain>
      <div className={"parent-home-style "}>
        <div className={"home-style"}>
          <HomePageContent />
        </div>
      </div>
    </TemplateMain>
  );
};

export default ViewHome;
