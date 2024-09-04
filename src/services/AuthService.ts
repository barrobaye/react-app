
import apiClient from "./api.client";




// Define the response structure
export interface RestResponse<T> {
    message: string;
    status: string;
    data: T;
    token:string
}

// Define the authentication response interface
export interface AuthResponse {
    token: string;
}

// Define the request payload interfaces
export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPayload {
    email: string;
    password: string;
    clientId: number;
    role?: string;
}

export interface CredentialsOrNull {
    email: string;
    password: string;
  }



// AuthService class

export class AuthService {
    static async login(credentials: CredentialsOrNull): Promise<RestResponse<{ token: string }>> {
      try {
       const response = await apiClient.post<RestResponse<{ token: string }>>("/login", credentials);
    //  return axios.post('api/v1/auth/login', credentials);

        return response.data;
        console.log(response.data)
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    }
  
    static saveToken(token: string) {
      localStorage.setItem('authToken', token);
    }
  
    static getToken(): string | null {
      return localStorage.getItem('authToken');
    }
  
    static logout() {
      localStorage.removeItem('authToken');
    }
  }


export default AuthService;
