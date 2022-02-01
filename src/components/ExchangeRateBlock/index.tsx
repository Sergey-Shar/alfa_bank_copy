import { memo, FC, useEffect } from "react";
import { Box, Container, ListItemIcon, TableRow } from "@mui/material";
import StaticDatePickerLandscape from "../DatePicker";
import { useAppSelector, useAppDispatch } from "../../hooks";
import AcccessibleTable from "../Table";
import { NAMES_TITLE_TABLE } from "../../constants/NAMES_TITLES_TABLES";
import TableCell from "@mui/material/TableCell";
import AlertMessage from "../Alert";
import {
  selectDate,
  getRate,
  selectData,
  selectloader,
  selectCurrentDate,
  selectError,
} from "../../slices/dateSlice";
import { FONT_SIZE } from "../../constants/FONT_SIZE_FOR_TABLE";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { EXENGE_BOX_STYLE } from "../../constants/EXANGE_STYLE";

const ExchangeRate: FC = () => {
  const date = useAppSelector(selectDate);
  const dataRate = useAppSelector(selectData);
  const loader = useAppSelector(selectloader);
  const currentDate = useAppSelector(selectCurrentDate);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRate(date));
  }, [date, dispatch]);

  return (
    <Container maxWidth="xl">
      {error && (
        <AlertMessage
          severity={"error"}
          title={"Ошибка"}
          message={" Это предупреждение об ошибке"}
          strongMessage={error}
        />
      )}
      <Box sx={EXENGE_BOX_STYLE}>
        <AcccessibleTable
          width={650}
          heigth={350}
          caption={<caption>{`Обновлены ${currentDate}`} </caption>}
          tableCell={NAMES_TITLE_TABLE.map((name) => (
            <TableCell key={name.id}>{name.name}</TableCell>
          ))}
          tableRow={
            !loader &&
            dataRate.map((data, index) => (
              <TableRow key={data.Cur_ID}>
                <TableCell sx={FONT_SIZE} component="th" scope="row">
                  <ListItemIcon>
                    {index === 0 && <AttachMoneyIcon />}
                    {index === 1 && <EuroIcon />}
                    {index === 2 && <CurrencyRubleIcon />}
                  </ListItemIcon>
                  {`${data.Cur_Scale} ${data.Cur_Abbreviation}`}
                </TableCell>
                <TableCell sx={FONT_SIZE} align="right">
                  {data.Cur_Name}
                </TableCell>
                <TableCell sx={FONT_SIZE} align="right">
                  {data.Cur_OfficialRate}
                </TableCell>
              </TableRow>
            ))
          }
        />

        <StaticDatePickerLandscape />
      </Box>
    </Container>
  );
};

export default memo(ExchangeRate);
