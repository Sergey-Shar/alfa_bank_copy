import { FC, memo } from "react";
import { Box, LinearProgress } from "@mui/material";

const ProgressLoader: FC = () => {
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <LinearProgress color="error" />
    </Box>
  );
};

export default memo(ProgressLoader);
