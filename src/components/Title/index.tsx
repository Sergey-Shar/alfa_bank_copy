import { Typography } from "@mui/material";
import { FC, memo } from "react";

interface ITextTitle {
  textTitle: string;
  color?: string;
  hover?: string;
  pointer?: string;
}

const Title: FC<ITextTitle> = ({ textTitle, color, hover, pointer }) => {
  return (
    <>
      <Typography
        color={color}
        sx={{ fontWeight: "900", cursor: pointer, ":hover": { color: hover } }}
        variant="h2"
        component="div"
      >
        {textTitle}
      </Typography>
    </>
  );
};

export default memo(Title);
