import axios from "axios";
import Cookies from "js-cookie";

const uri = process.env.NEXT_PUBLIC_API!;
const accessToken = Cookies.get("access token")!;

const axiosInstance = axios.create({
  baseURL: uri,
  timeout: 2000,
  headers: {
    Authorization: `BEARER ${accessToken}`,
  },
});

export default axiosInstance;
