import axios, { AxiosResponse } from "axios";
import { PostType } from "../types/PostTypes";
import { TDate } from "../types/DateType";

const instance = axios.create({
  baseURL: "https://www.nbrb.by/api/exrates/",
  timeout: 5000,
  validateStatus: (status: number): boolean => {
    return status >= 200 && status < 300;
  },
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
};

export const Post = {
  getExangeRateById: (date: TDate, id?: number): Promise<PostType> =>
    requests.get(`rates/${id}?ondate=${date}&periodicity=0`),
};
