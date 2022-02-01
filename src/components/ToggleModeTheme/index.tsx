import { FC, memo, createContext, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import IconBtn from "../IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ToggleBtnMode: FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <IconBtn
      icon={
        theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />
      }
      toggle={colorMode.toggleColorMode}
    />
  );
};
export default memo(ToggleBtnMode);
