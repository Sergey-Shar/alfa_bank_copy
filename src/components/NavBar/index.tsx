import { memo, FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "../Logo";
import TemporaryDrawer from "../Drawer";

const NavBar: FC = () => {
  return (
    <AppBar
      id="section1"
      position="sticky"
      sx={{ backdropFilter: "blur(5px)" }}
    >
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Logo />
        </Typography>
        <TemporaryDrawer />
      </Toolbar>
    </AppBar>
  );
};

export default memo(NavBar);
