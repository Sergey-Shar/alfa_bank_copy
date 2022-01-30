import { memo, FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "../Logo";
import IconBurger from "../IconButton";

const NavBar: FC = () => {
  return (
    <AppBar position="sticky" sx={{ backdropFilter: "blur(5px)" }}>
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <Logo />
        </Typography>
        <IconBurger />
      </Toolbar>
    </AppBar>
  );
};

export default memo(NavBar);
