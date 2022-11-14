import ExploreButton from "../atoms/Buttons/ExploreButton";
import MainText from "../molecules/MainText/MainText";
import "./HomePage.scss";

const HomePageContent = () => {
  return (
        <div className={"home-page-content"}>
          <MainText />
          <ExploreButton>Explore</ExploreButton>
      </div>
  );
};

export default HomePageContent;
