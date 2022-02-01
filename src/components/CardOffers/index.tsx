import { Box } from "@mui/material";
import { FC, memo, useCallback, useState } from "react";
import "./style.css";

interface Props {
  title: string;
  subTitle?: string;
  list?: string;
  list2?: string;
  image: string;
}

const CardOffers: FC<Props> = ({ title, subTitle, list, list2, image }) => {
  const [active, setActive] = useState<boolean>(false);

  const onHover = useCallback((): void => {
    setActive(true);
  }, [setActive]);

  const onOutHover = useCallback((): void => {
    setActive(false);
  }, [setActive]);

  return (
    <Box
      sx={{ backgroundColor: "secondary.main" }}
      onMouseOver={onHover}
      onMouseOut={onOutHover}
      className="cards"
    >
      <div className="box-title">
        <h3
          style={{ color: active ? "#ffff" : "#f03226" }}
          className="title-cards"
        >
          {title}
        </h3>
        <ul className="subtitle-cards">
          {subTitle}
          <li>{list} </li>
          <li> {list2} </li>
        </ul>
      </div>
      <img src={image} alt="offersIcons" className="ofer-card_image" />
    </Box>
  );
};
export default memo(CardOffers);
