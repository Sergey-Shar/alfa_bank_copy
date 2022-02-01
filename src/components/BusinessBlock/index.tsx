import { FC, memo, useEffect } from "react";
import {
  getCurrencies,
  selectDataCurr,
  selectloader,
} from "../../slices/dataCurenciesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Box, Container, TableCell, TableRow } from "@mui/material";
import AcccessibleTable from "../Table";
import { NAMES_TITLE_TABLE_CURRENCIES } from "../../constants/NAMES_TITLES_TABLES";
import { FONT_SIZE } from "../../constants/FONT_SIZE_FOR_TABLE";

const BusinnessBlock: FC = () => {
  const dispatch = useAppDispatch();
  const dataCurrencies = useAppSelector(selectDataCurr);
  const loader = useAppSelector(selectloader);

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  console.log(dataCurrencies);

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 20 }}>
        <AcccessibleTable
          tableCell={NAMES_TITLE_TABLE_CURRENCIES.map((name) => (
            <TableCell sx={FONT_SIZE} key={name.id}>
              {name.name}
            </TableCell>
          ))}
          tableRow={
            !loader &&
            dataCurrencies.map((data) => (
              <TableRow key={data.Cur_ID}>
                <TableCell component="th" scope="row">
                  {data.Cur_Code}
                </TableCell>
                <TableCell align="right">{data.Cur_Name}</TableCell>
                <TableCell align="right">{data.Cur_Name_Eng}</TableCell>
                <TableCell align="right">{data.Cur_Scale}</TableCell>
              </TableRow>
            ))
          }
          caption={undefined}
        />
      </Box>
    </Container>
  );
};

export default memo(BusinnessBlock);
