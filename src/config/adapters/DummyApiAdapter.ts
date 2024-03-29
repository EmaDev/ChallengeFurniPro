import { AxiosAdapter } from "./http/axios.adapter";

export const DummyApiAdapter = new AxiosAdapter({
    baseUrl: "https://dummyjson.com",
    params: {}
})