import ExploreButton from "../atoms/Buttons/ExploreButton/ExploreButton";
import MainText from "../molecules/MainText/MainText";
import "./HomePage.scss";

const HomePageContent = () => {
  return (
        <div className={"home-page-content"}>
          <MainText />
          <ExploreButton tooltip={'Przejdź do logowania '}>Explore</ExploreButton>
      </div>
  );
};

export default HomePageContent;
