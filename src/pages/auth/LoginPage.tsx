import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./LoginPage.css";
import AuthService, { CredentialsOrNull } from '../../services/auth/AuthService';

// Define the interface for form data
interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Specify form data type
  const navigate = useNavigate();

  const handleConnection = (credentials: CredentialsOrNull) => {
    console.log("Credentials:", credentials); 
    AuthService
      .login(credentials)
      .then((res) => {
        console.log("Response:", res); // Log the full response to confirm its structure
  
        // Access the token directly from the response
        const token = res.token; 
        if (!token) {
          throw new Error("Token not found in response");
        }
  
        console.log("Login successful:", token);
        AuthService.saveToken(token);
        navigate("/boutique/dashboard", { replace: true });
      })
      .catch((error) => {
        console.error("Login failed:", error.message || error);
      });
  };
  return (
    <div className="flex-row log">
      <div className="flex justify-center items-center bg-teal-400 h-screen">
        <h3 className="text-center text-2xl font-bold w-64 text-white animate-fade-in">
          Bienvenue Dans Barro Boutique
        </h3>
      </div>
      <div className="content sm:mx-auto">
        <div className="pb-0 h-32 mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-12 w-auto"
            src="../../src/assets/Leboutiquier.png"
            alt="Leboutiquier Logo"
          />
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mb-9 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6 mb-12"
            onSubmit={handleSubmit((credentials) =>
              handleConnection({
                email: credentials.email,
                password: credentials.password,
              })
            )}
          >
            <div>
              <label
                htmlFor="email"
                className="h-8 block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div>
                <input
                  id="email" type="text"
                  autoComplete="email"
                  className="h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('email', { required: 'Entrer votre email' })}
                />
                {errors?.email && (
                  <div className="error text-sm text-red-800 mt-1">
                    {errors.email.message?.toString()}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="h-8 block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-teal-400 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="......"
                  {...register('password', {
                    required: 'Entrer votre mot de passe',
                    minLength: {
                      value: 3,
                      message: 'Mot de passe doit contenir au moins 3 caractères',
                    },
                  })}
                />
                {errors?.password && (
                  <div className="error text-sm text-red-800 mt-1">
                    {errors.password.message?.toString()}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              < button
                type="submit"
                className="h-12 flex w-full justify-center content-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Connecter
              </button>
            </div>
          </form>
          < button
            type="button"
            className="h-12 flex w-full justify-center content-center rounded-md bg-cyan-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
