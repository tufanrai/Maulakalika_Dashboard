import axios from "axios";
import Cookies from "js-cookie";

const uri = process.env.NEXT_PUBLIC_API!;
const accessToken = Cookies.get("accessToken")!;

export const axiosInstance = axios.create({
  baseURL: uri,
});

export const filesInstance = axios.create({
  baseURL: uri,
  headers: {
    Authorization: `BEARER ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
});
