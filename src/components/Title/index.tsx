import { Typography } from "@mui/material";
import { FC, memo } from "react";

interface ITextTitle {
  textTitle: string;
}

const Title: FC<ITextTitle> = ({ textTitle }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "900" }} variant="h2" component="div">
        {textTitle}
      </Typography>
    </>
  );
};

export default memo(Title);
