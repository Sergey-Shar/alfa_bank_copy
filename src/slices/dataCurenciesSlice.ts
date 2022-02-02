import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Post } from "../api/api";
import { PostCurrencies } from "../types/PostTypes";

interface DataCurrenciesState {
  data: PostCurrencies[];
  error: string;
  loader: boolean;
}

const initialState: DataCurrenciesState = {
  data: [
    {
      Cur_ID: 0,
      Cur_Code: "",
      Cur_Name: "",
      Cur_Name_Eng: "",
      Cur_Scale: "",
    },
  ],
  error: "",
  loader: true,
};
export const dataCurrenciesSlice = createSlice({
  name: "dataCurrencies",
  initialState,
  reducers: {
    setDataCurrencies: (state, action: PayloadAction<PostCurrencies[]>) => {
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

export const { setDataCurrencies, setError, setLoader } =
  dataCurrenciesSlice.actions;

export const selectDataCurr = (state: RootState) => state.dataCurrencies.data;
export const selectError = (state: RootState) => state.dataCurrencies.error;
export const selectloader = (state: RootState) => state.dataCurrencies.loader;

export const getCurrencies = () => async (dispatch: any) => {
  try {
    const currencies = await Post.getAllCurrencies();
    dispatch(setDataCurrencies(currencies));
    dispatch(setLoader(false));
  } catch (error: any) {
    error.response
      ? dispatch(setError(error.response.status))
      : dispatch(setError(error.message));
  }
};

export default dataCurrenciesSlice.reducer;
