import axios, { AxiosResponse } from "axios";


const base = "http://localhost:8080";

export const settings = {
  baseURL: base,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  },
};

export const instance = axios.create(settings);

export const appAxios = {
  async get<T>(url: string): Promise<AxiosResponse<T>> {
    try {
      return instance.get(url);
    } catch (error: any) {
      return error;
    }
  },
  async getWithParam<T>(url: string, params: any): Promise<AxiosResponse<T>> {
    try {
      return instance.get(url, params);
    } catch (error: any) {
      return error;
    }
  },
  async post(url: string, body: any): Promise<any> {
    try {
      return instance.post(url, body ?? {});
    } catch (error) {
      return error;
    }
  },
  async put(url: string, body: any): Promise<any> {
    try {
      return instance.put(url, body ?? {});
    } catch (error) {
      return error;
    }
  },
  async patch(url: string, body: any) {
    try {
      return instance.post(url, body ?? {});
    } catch (error) {
      return error;
    }
  },
  async delete(url: string, body: any) {
    try {
      return instance.post(url, body ?? {});
    } catch (error) {
      return error;
    }
  },
};

export default appAxios;
