import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import ViewHome from "./pages/Home/ViewHome";

import "./index.css";
import ViewRegister from "./pages/Register/ViewRegister";
import ViewLogin from "./pages/Login/ViewLogin";
import ViewDestinations from "./pages/Destinations/Destinations/ViewDestinations";
import ViewDestination from "./pages/Destinations/Destination/ViewDestination";
import ViewCrews from "./pages/Crews/Crews/ViewCrews";
import ViewCrew from "./pages/Crews/Crew/ViewCrew";
import ViewTechnologies from "./pages/Technologies/Technologies/ViewTechnologies";
import ViewTechnology from "./pages/Technologies/Technology/ViewTechnology";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<ViewHome />} />
        <Route path={routes.register} element={<ViewRegister />} />
        <Route path={routes.login} element={<ViewLogin/>}/>
        <Route path={routes.destinations} element={<ViewDestinations/>}/>
        <Route path={routes.destination} element={<ViewDestination/>}/>
        <Route path={routes.crews} element={<ViewCrews/>}/>
        <Route path={routes.crew} element={<ViewCrew/>}/>
        <Route path={routes.technologies} element={<ViewTechnologies/>}/>
        <Route path={routes.technology} element={<ViewTechnology/>}/>
      </Routes>
    </>
  );
};

export default App;
