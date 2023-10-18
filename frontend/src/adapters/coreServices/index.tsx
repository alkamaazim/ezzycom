import { axiosConfig } from "./utils";

type Props = {}

const getData = (endPoint: string, params?: any) => {
    const instance: any = axiosConfig.axiosInstance;
    return instance.get(endPoint);
}

export default getData