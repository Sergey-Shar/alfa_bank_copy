import {memo, FC, useState }from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import ruLocale from "date-fns/locale/ru";

const localeMap = {
  ru: ruLocale,
};
const maskMap = {
  ru: "__.__.____",
};

 const StaticDatePickerLandscape: FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap["ru"]}>
      <StaticDatePicker<Date>
        mask={maskMap["ru"]}
        label="На дату:"
        disableFuture
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default memo(StaticDatePickerLandscape)
