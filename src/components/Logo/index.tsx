import { memo, FC, useCallback, useState } from "react";
import { IMAGE } from "../../constants/IMAGES"
import "./style.css";

const Logo: FC = () => {
  const [classNameImage, setClassNameImage] = useState<string>("logo-img");
  const [classNameText, setClassNameText] = useState<string>("logo-text");

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
