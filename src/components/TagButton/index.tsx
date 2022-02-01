import { Button } from "@mui/material";
import { FC, memo } from "react";
import { TAG_BTN_STYLE } from "../../constants/TAG_BTN_STYLE";

interface Props {
  text: string;
  id: string;
  onChangeCards: (event: any) => void;
  data: string;
}

const TagButton: FC<Props> = ({ text, id, onChangeCards, data }) => {
  return (
    <Button
      color="inherit"
      id={id}
      data-btn={data}
      onClick={onChangeCards}
      sx={TAG_BTN_STYLE}
    >
      {text}
    </Button>
  );
};
export default memo(TagButton);
