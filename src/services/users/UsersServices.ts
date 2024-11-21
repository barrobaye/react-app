import { User } from "../../model/Users";
import apiClient, { RestResponse } from "../api.client";

class UserServices{
    private static appendToFormData(formData: FormData, key: string, value: string | Blob | undefined) {
        if (value !== undefined) {
          formData.append(key, value);
        }
}
 // Function to get all users
 public static async getClients(): Promise<RestResponse<User[]>> {
    try {
      const response = await apiClient.get<RestResponse<User[]>>('/users');
      return response.data;

    } catch (error) {
      console.error('Failed to fetch clients:', error);
      throw new Error('Failed to fetch clients');
    }
  }
}

export default UserServices;