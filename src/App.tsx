import { memo, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RatesDaily from "./pages/RatesDaily";
import { HashRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "./components/NavBar";

const App: FC = () => {
  return (
    <Router>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <CssBaseline />
      <NavBar/>
          <Switch>
            <Route path="/rates">
              <RatesDaily />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
      {/* </HashRouter> */}
    </Router>
  );
};

export default memo(App);
