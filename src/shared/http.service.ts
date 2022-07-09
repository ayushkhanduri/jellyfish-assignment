import axios, { AxiosResponse } from "axios";

export class HttpService {
  public static async get<ResponseType>(
    url: string,
  ): Promise<ResponseType> {
    try {
      const response: AxiosResponse<ResponseType> = await axios.get(url);
      return Promise.resolve(response.data);
    } catch (e) {
      return Promise.reject(e);
    }
  }
  //TODO - Implement REST METHODS
  public static async post<T, ResponseType>(
    url: string,
    data: T
  ): Promise<ResponseType> {
    try {
      const response: AxiosResponse<ResponseType> = await axios.post(url, data);
      return Promise.resolve(response.data);
    } catch (e) {
      // TODO - Exception type implementation
      return Promise.reject(e);
    }
  }
}