import { memo, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { setChangeDate } from "../../slices/dateSlice";
import { useAppDispatch } from "../../hooks";
import ruLocale from "date-fns/locale/ru";
import { format } from "date-fns";

const localeMap = {
  ru: ruLocale,
};
const maskMap = {
  ru: "__.__.____",
};

const StaticDatePickerLandscape: FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  const dispatch = useAppDispatch();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap["ru"]}>
      <StaticDatePicker<Date>
        mask={maskMap["ru"]}
        label="Курсы на дату:"
        disableFuture
        orientation="landscape"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          //@ts-ignore
          dispatch(setChangeDate(format(newValue, "yyyy-MM-dd")));
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default memo(StaticDatePickerLandscape);
