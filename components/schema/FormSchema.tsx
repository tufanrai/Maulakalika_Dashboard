import * as yup from "yup";
import { ETypes } from "../interfaces/interfaces";

// register user
export const RegisterSchema = yup.object({
  name: yup.string().required("please enter your full name"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("please enter your email"),
  about: yup.string(),
  contact: yup
    .string()
    .required("please enter your contact number")
    .test("digits-only", "Only numbers are allowed.", (value) => {
      // If the value is null or undefined, it's considered valid by this test
      // as the 'required' validation handles emptiness.
      if (value === null || typeof value === "undefined") {
        return true;
      }
      // Convert the number to a string to apply regex
      return /^\d+$/.test(value.toString());
    }),
  role: yup.string().required("please select you role"),
  password: yup
    .string()
    .required("please enter your password")
    .min(8, "your password must be atleast of 8 characters")
    .test(
      "contains-number",
      "Password must contain at least one number",
      (value) => {
        return /\d/.test(value); // Checks for the presence of at least one digit
      }
    )
    .matches(
      /^.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*$/,
      "Password must contain at least one special character"
    ),
});

// Login schema
export const LoginSchema = yup.object({
  email: yup.string().required("please enter your email."),
  password: yup.string().required("please enter your email."),
});

// files schema
export const UploadSchema = yup.object({
  file: yup
    .mixed<File>()
    .required("Please upload a file")
    .test(
      "fileExists",
      "Please upload a file",
      (value) => value instanceof File
    ),
  title: yup.string().required("please add a title to the file"),
  description: yup.string().required("please summarise the file"),
  type: yup
    .string()
    .required("Please enter the file category")
    .oneOf([ETypes.downloads, ETypes.events, ETypes.news, ETypes.projects]),
});

// image schema
export const ImageUploadSchema = yup.object({
  image: yup
    .mixed<File>()
    .required("Please upload a file")
    .test(
      "fileExists",
      "Please upload a file",
      (value) => value instanceof File
    ),
});

// user info
export const AdminsData = yup.object({
  name: yup.string(),
  email: yup.string().email("please enter a valid email"),
  contact: yup.string(),
});
