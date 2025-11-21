import { IRegister, ILogin } from "../../components/interfaces/interfaces";
import axiosInstance from "./axios.instance";

// Register User
export const RegisterNewUser = async (data: IRegister) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

// Login user
export const LoginUser = async (data: ILogin) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
