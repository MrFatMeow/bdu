import axios from "axios";
import { ObjectHelper } from "../../helper/object.helper";
import { PublicAPIs } from "./apis";

export class PublicServices {
  static async getProducts(filter: any) {
    const params = ObjectHelper.getParamsFilter(filter);
    const x = await axios.get(`${PublicAPIs.BASE_URL}/products?${params}`);
    return x?.data;
  }
  static async saveProduct(data: any) {
    const x = await axios.post(`${PublicAPIs.BASE_URL}/products`, data);
    return x?.data;
  }

  static async getCustomers(filter: any) {
    const params = ObjectHelper.getParamsFilter(filter);
    const x = await axios.get(`${PublicAPIs.BASE_URL}/customers?${params}`);
    return x?.data;
  }

  static async getOrders(filter: any) {
    const params = ObjectHelper.getParamsFilter(filter);
    const x = await axios.get(`${PublicAPIs.BASE_URL}/orders?${params}`);
    return x?.data;
  }
}
