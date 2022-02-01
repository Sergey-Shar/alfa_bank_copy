import { memo, FC, ReactChild, ReactNode } from "react";
import { IconButton } from "@mui/material";

interface Props {
  toggle?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  icon: ReactChild | ReactNode;
  color?: string;
}

const IconBtn: FC<Props> = ({ toggle, icon }) => {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      onClick={toggle}
    >
      {icon}
    </IconButton>
  );
};

export default memo(IconBtn);
