// Import the RestResponse type
import { Client } from "../../model/Client";
import apiClient, { RestResponse } from "../api.client";

class ClientService {
  // Utility function to safely append data to FormData
  private static appendToFormData(formData: FormData, key: string, value: string | Blob | undefined) {
    if (value !== undefined) {
      formData.append(key, value);
    }
  }

  // Function to get all clients
  public static async getClients(): Promise<RestResponse<Client[]>> {
    try {
      const response = await apiClient.get<RestResponse<Client[]>>('/clients');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch clients:', error);
      throw new Error('Failed to fetch clients');
    }
  }

  // Function to get a single client by ID
  public static async getClientById(id: number): Promise<RestResponse<Client>> {
    try {
      const response = await apiClient.get<RestResponse<Client>>(`/clients/${id}`);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch client:', error);
      throw new Error('Failed to fetch client');
    }
  }

  // Function to create a new client
  public static async createClient(clientData: Client): Promise<RestResponse<Client>> {
    try {
      const formData = new FormData();
      Object.entries(clientData).forEach(([key, value]) => {
        if (typeof value === 'string' || value instanceof Blob) {
          this.appendToFormData(formData, key, value);
        }
      });

      const response = await apiClient.post<RestResponse<Client>>('/clients', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Failed to create client:', error);
      throw new Error('Failed to create client');
    }
  }

  // Function to update an existing client
  public static async updateClient(id: number, clientData: Client): Promise<RestResponse<Client>> {
    try {
      const formData = new FormData();
      Object.entries(clientData).forEach(([key, value]) => {
        if (typeof value === 'string' || value instanceof Blob) {
          this.appendToFormData(formData, key, value);
        }
      });

      const response = await apiClient.put<RestResponse<Client>>(`/clients/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Failed to update client:', error);
      throw new Error('Failed to update client');
    }
  }
}

export default ClientService;
