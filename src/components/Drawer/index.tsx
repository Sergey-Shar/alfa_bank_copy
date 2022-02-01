import { FC, memo, useCallback, useState } from "react";
import IconBtn from "../IconButton";
import ToggleModeTheme from "../ToggleModeTheme";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, Drawer, Box } from "@mui/material";
import Title from "../Title";
import "./style.css";
import { Link } from "react-router-dom";

const TemporaryDrawer: FC = () => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = useCallback(
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ right: open });
    },
    []
  );

  const list = () => (
    <Box
      sx={{ width: 1000 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <div className="list-btn">
          <ToggleModeTheme />
          <IconBtn toggle={toggleDrawer(false)} icon={<CloseIcon />} />
        </div>
        <ListItem onClick={toggleDrawer(false)}>
          <Link to={"/"}>
            <Title
              pointer="pointer"
              hover="red"
              color="gray"
              textTitle={"Частным лицам"}
            />
          </Link>
        </ListItem>
        <Link to={"/businnes"}>
          <ListItem onClick={toggleDrawer(false)}>
            <Title
              pointer="pointer"
              hover="red"
              color="gray"
              textTitle={"Бизнесу"}
            />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <div>
      <IconBtn toggle={toggleDrawer(true)} icon={<MenuIcon />} />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default memo(TemporaryDrawer);
