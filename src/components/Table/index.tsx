import { FC, memo, ReactChild, ReactNode } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Props {
  tableCell: ReactChild | ReactNode;
  tableRow: ReactChild | ReactNode;
  caption: ReactChild | ReactNode;
  width?: number;
  heigth?:number;
}

const AcccessibleTable: FC<Props> = ({
  tableCell,
  tableRow,
  caption,
  width,
  heigth,
}) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: width, height: heigth}}>
      <Table sx={{ maxWidth: width}} aria-label="caption table">
        {caption}
        <TableHead>
          <TableRow>{tableCell}</TableRow>
        </TableHead>
        <TableBody>{tableRow}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default memo(AcccessibleTable);
