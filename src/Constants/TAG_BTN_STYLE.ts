type TagStyle = {
  fontSize: string;
  fontWeight: string;
  margin: string;
  padding: string;
  cursor: string;
  borderRadius: string;
  backgroundColor: string;
  border: string;
  "&:hover": {
    backgroundColor: string;
    color: string;
  };
  "&:focus": {
    backgroundColor: string;
    color: string;
  };
};

export const TAG_BTN_STYLE: TagStyle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  margin: "3rem 1rem 3rem 0",
  padding: "0.6rem 1.3rem",
  cursor: "pointer",
  borderRadius: "2rem",
  backgroundColor: "secondary.main",
  border: "none",
  "&:hover": {
    backgroundColor: "#f03226",
    color: "#ffff",
  },
  "&:focus": {
    backgroundColor: "#f03226",
    color: "#ffff",
  },
};
