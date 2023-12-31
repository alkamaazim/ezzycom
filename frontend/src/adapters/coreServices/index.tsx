import { axiosConfig } from "./utils";

type Props = {};

const getData = (endPoint: string, params?: any) => {
  const instance: any = axiosConfig.axiosInstance;
  return instance.get(endPoint);
};

const postData = (endPoint: string, values: any) => {
  const instance: any = axiosConfig.axiosInstance;
  return instance.post(endPoint, values);
};

const updateData = (endPoint: string) => {
  const instance: any = axiosConfig.axiosInstance;
  return instance.put(endPoint);
};

const deleteData = (endPoint: string) => {
  const instance: any = axiosConfig.axiosInstance;
  return instance.delete(endPoint);
};

export { getData, postData, updateData, deleteData };
