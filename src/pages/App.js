import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../assets/styles/GlobalStyles";
import { theme } from "../assets/styles/theme";
import { routes } from "../routes";
import ViewHome from "./Home/ViewHome";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path={routes.home} element={<ViewHome />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
