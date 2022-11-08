import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import ViewHome from "./pages/Home/ViewHome";

import './index.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<ViewHome />} />
      </Routes>
      </>
  );
};

export default App;
