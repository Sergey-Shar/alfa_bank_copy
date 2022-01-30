import { memo, FC } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const IconBurger: FC = () => {
  return (
    <IconButton
      size="large"
      edge="end"
      color="default"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default memo(IconBurger);
