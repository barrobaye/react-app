// import { jwtDecode } from "jwt-decode";
// import apiClient, { RestResponse } from "./api.client";

// interface Credentials {
//   login: string;
//   password: string;
// }

// export type CredentialsOrNull = Credentials | null;

// // Login function to authenticate user
// const login = async (credentials: CredentialsOrNull) => {
//   try {
//     const response = await apiClient.post<RestResponse<{ token: string }>>(
//       "/auth/login",
//       credentials
//     );
//     return response.data;
//   } catch (error: unknown) {
//     // Use type guard to check if 'error' has 'response' property
//     if (isAxiosError(error)) {
//       // Handle known error response (like 4xx, 5xx)
//       console.error("Error response from server:", error.response?.data);
//       throw error.response?.data;
//     } else if (error instanceof Error) {
//       // Handle generic errors (network or others)
//       console.error("Unexpected error:", error.message);
//       throw new Error("Network error, please try again later.");
//     } else {
//       // Handle any other type of error (unexpected)
//       console.error("Unexpected error of unknown type:", error);
//       throw new Error("Unexpected error occurred.");
//     }
//   }
// };

// // Function to check if error is AxiosError
// function isAxiosError(error: unknown): error is { response: { data:
//   { error: string } 
//  } } {
//   return (error as { response?: { data:
//     any } }).response !== undefined;
   
// }

// // Logout function to clear user token
// const logout = () => {
//   localStorage.removeItem("token");
// };

// // Check if user is logged in
// const isLogged = () => {
//   const token = localStorage.getItem("token");
//   return !!token;
// };

// // Retrieve token from local storage
// const getToken = () => {
//   return localStorage.getItem("token");
// };

// // Decode token to get user information
// const getTokenInfo = () => {
//   const token = getToken();
//   if (!token) {
//     throw new Error("Token not found, user is not authenticated.");
//   }
//   return jwtDecode(token);
// };

// // Save token to local storage
// const saveToken = (token: string) => {
//   localStorage.setItem("token", token);
// };

// export const authService = {
//   login,
//   logout,
//   isLogged,
//   getToken,
//   getTokenInfo,
//   saveToken,
// };
