import { Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { FC, memo } from "react";

interface ITextTitle {
  textTitle: string;
  color?: string;
  hover?: string;
  pointer?: string;
  variant?: Variant;
}

const Title: FC<ITextTitle> = ({
  textTitle,
  color,
  hover,
  pointer,
  variant = "h2",
}) => {
  return (
    <>
      <Typography
        color={color}
        sx={{ fontWeight: "900", cursor: pointer, ":hover": { color: hover } }}
        variant={variant}
        component="div"
      >
        {textTitle}
      </Typography>
    </>
  );
};

export default memo(Title);
