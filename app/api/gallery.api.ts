import axiosInstance from "./axios.instance";

const fetchGalleryContents = async () => {
  try {
    const response = await axiosInstance.get("/gallery");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export default fetchGalleryContents;
