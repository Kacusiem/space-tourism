import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import ViewHome from "./pages/Home/ViewHome";

import "./index.css";
import ViewRegister from "./pages/Register/ViewRegister";
const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<ViewHome />} />
        <Route path={routes.register} element={<ViewRegister />} />
      </Routes>
    </>
  );
};

export default App;
