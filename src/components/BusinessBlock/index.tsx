import { FC, memo, useEffect } from "react";
import {
  getCurrencies,
  selectDataCurr,
  selectloader,
} from "../../slices/dataCurenciesSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Box, Container, TableCell, TableRow } from "@mui/material";
import AcccessibleTable from "../Table";
import {
  NAMES_TITLE_TABLE_CURRENCIES,
  INamesTables,
} from "../../сonstants/NamesTitlesTables";
import { FONT_SIZE } from "../../сonstants/SizeForTable";
import ProgressLoader from "../ProgressLoader";
import { PostCurrencies } from "../../types/PostTypes";
import Title from "../Title";

const BusinnessBlock: FC = () => {
  const dispatch = useAppDispatch();
  const dataCurrencies = useAppSelector(selectDataCurr);
  const loader = useAppSelector(selectloader);

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  console.log(dataCurrencies);

  return (
    <Container maxWidth="xl" sx={{ pt: 7 }}>
      <Title
        variant="h3"
        textTitle={`Перечень иностранных валют, по отношению к которым
        Национальный банк Республики Беларусь, устанавливает официальный 
        курс беларусcкого рубля.`}
      />
      {loader &&  <ProgressLoader />}
      <Box sx={{ pt: 7 }}>
        <AcccessibleTable
          tableCell={NAMES_TITLE_TABLE_CURRENCIES.map((name: INamesTables) => (
            <TableCell sx={FONT_SIZE} key={name.id}>
              {name.name}
            </TableCell>
          ))}
          tableRow={dataCurrencies.map((data: PostCurrencies) => (
            <TableRow key={data.Cur_ID}>
              <TableCell component="th" scope="row">
                {data.Cur_Code}
              </TableCell>
              <TableCell align="right">{data.Cur_Name}</TableCell>
              <TableCell align="right">{data.Cur_Name_Eng}</TableCell>
              <TableCell align="right">{data.Cur_Scale}</TableCell>
            </TableRow>
          ))}
        />
      </Box>
    </Container>
  );
};

export default memo(BusinnessBlock);
