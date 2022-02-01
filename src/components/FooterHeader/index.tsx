import { FC, memo } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IMAGE } from "../../constants/IMAGES";
import "./style.css";

const FooterHeader: FC = () => {
  return (
    <div className="footer-header">
      <img
        onClick={() => scroll.scrollToTop()}
        className="logo-footer"
        src={IMAGE.logo}
        alt="logo"
      />
      <h2 onClick={() => scroll.scrollToTop()} className="logo-footer-text">
        Частным лицам
      </h2>
    </div>
  );
};
export default memo(FooterHeader);
