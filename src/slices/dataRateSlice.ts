import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { format } from "date-fns";
import { Post } from "../api/api";
import { PostRateType } from "../types/PostTypes";
import { TDate } from "../types/DateType";

interface DataRateState {
  date: TDate;
  currentDate: string;
  data: PostRateType[];
  error: string;
  loader: boolean;
}

const initialState: DataRateState = {
  date: format(new Date(), "yyyy-MM-dd"),
  currentDate: format(new Date(), "dd.MM.yyyy"),
  data: [
    {
      Cur_ID: 0,
      Cur_Abbreviation: "",
      Cur_Scale: "",
      Cur_Name: "",
      Cur_OfficialRate: "",
    },
  ],
  error: "",
  loader: true,
};
export const dataRateSlice = createSlice({
  name: "dataRate",
  initialState,
  reducers: {
    setChangeDate: (state, action: PayloadAction<string | Date | null>) => {
      state.date = action.payload;
    },
    setData: (state, action: PayloadAction<PostRateType[]>) => {
      state.data = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const { setChangeDate, setData, setError, setLoader } =
  dataRateSlice.actions;

export const selectDate = (state: RootState) => state.dataRate.date;
export const selectData = (state: RootState) => state.dataRate.data;
export const selectError = (state: RootState) => state.dataRate.error;
export const selectloader = (state: RootState) => state.dataRate.loader;
export const selectCurrentDate = (state: RootState) =>
  state.dataRate.currentDate;

export const getRate = (date: TDate) => async (dispatch: any) => {
  try {
    const usd = await Post.getExangeRateById(date, 431);
    const eur = await Post.getExangeRateById(date, 451);
    const rub = await Post.getExangeRateById(date, 456);
    const data = [usd, eur, rub];
    dispatch(setData(data));
    dispatch(setLoader(false));
  } catch (error: any) {
    error.response
      ? dispatch(setError(error.response.status))
      : dispatch(setError(error.message));
  }
};

export default dataRateSlice.reducer;
