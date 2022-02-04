import { memo, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BusinnesPage from "./pages/BusinessPage";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterBlock";

const Navigation: FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default memo(Navigation);
