import { memo, FC } from "react";
import { Container } from "@mui/material";
import FooterHeader from "../FooterHeader";
import "./style.css";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Container maxWidth="xl">
        <FooterHeader />
      </Container>
    </div>
  );
};

export default memo(Footer);
