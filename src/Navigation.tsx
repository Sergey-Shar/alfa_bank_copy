import { memo, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BusinnesPage from "./pages/BusinessPage";
import { HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterBlock";

const Navigation: FC = () => {
  return (
    <Router>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <CssBaseline />
      <NavBar />
      <Switch>
        <Route path="/businnes">
          <BusinnesPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
      {/* </HashRouter> */}
    </Router>
  );
};

export default memo(Navigation);
