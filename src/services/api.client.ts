import axios from "axios"



const apiClient = axios.create({ 
        baseURL: "http://localhost:3000/api/v1",
        withCredentials: true,
        timeout:5000,
        headers: {
            'Content-Type': 'application/json',
        }
}
)
export interface RestResponse <T>{
    message:string,
    status:string,
    data:T
}
export default apiClient;

// apiClient.interceptors.response.use(response =>{
//     return response.data
// })

// apiClient.interceptors.request.use(config =>{
//     const autoken = localStorage.getItem('token');
//     if(autoken){
//         config.headers['Authorization'] = `Bearer ${autoken}`;
//     }
//     return config;
// })

