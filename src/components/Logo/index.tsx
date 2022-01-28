import { memo, FC, useCallback, useState } from "react";
import { IMAGE } from "../../Constants/IMAGES"
import "./style.css";

const Logo: FC = () => {
  const [classNameImage, setClassNameImage] = useState("logo-img");
  const [classNameText, setClassNameText] = useState("logo-text");

  const onHover = useCallback((): void => {
    setClassNameText("logo-text active");
    setClassNameImage("logo-img active");
  }, [setClassNameText, setClassNameImage]);

  const onOutHover = useCallback((): void => {
    setClassNameText("logo-text");
    setClassNameImage("logo-img");
  }, [setClassNameText, setClassNameImage]);

  return (
    <div onMouseOver={onHover} onMouseOut={onOutHover} className="box-logo">
      <img
        className={classNameImage}
        src={IMAGE.logo}
        alt="logo"
      />
      <img
        className={classNameText}
        src={IMAGE.logoText}
        alt="logo"
      />
    </div>
  );
};

export default memo(Logo);
