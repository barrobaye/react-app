import { useState } from "react";
import "./DettePages.css";
import SuiviDette from "./SuiviDetteComponent";
const DettePage = () =>{
    
        const [createAccount, setCreateAccount] = useState(false);

    const toggleAccountFields = () => {
      setCreateAccount(!createAccount);
    };
    return (     
<div className="myrow ">
      {/* Nouveau Client Section */}
      <div className="newDet bg-white rounded-lg shadow-md p-6 w-50">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">
          <i className="fas fa-user-plus mr-2"></i>Nouveau Client
        </h2>
        <form method="POST" action="#" encType="multipart/form-data" className="space-y-4">
          <div className="form-row mb-4 flex items-center space-x-2">
            <label
              htmlFor="prenom"
              className="w-full sm:w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
            >
              <i className="fas fa-user mr-2"></i>Prénom
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="form-row mb-4 flex items-center space-x-2">
            <label
              htmlFor="nom"
              className="w-full sm:w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
            >
              <i className="fas fa-user mr-2"></i>Nom
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="form-row mb-4 flex items-center space-x-2">
            <label
              htmlFor="telephone"
              className="w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
            >
              <i className="fas fa-phone mr-2"></i>Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="form-row mb-4 flex items-center space-x-2">
            <label
              htmlFor="adresse"
              className="w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
            >
              <i className="fas fa-map-marker-alt mr-2"></i>Adresse
            </label>
            <input
              type="text"
              id="adresse"
              name="adresse"
              className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="form-row mb-4 flex items-center space-x-2">
            <label
              htmlFor="photo"
              className="w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
            >
              <i className="fas fa-camera mr-2"></i>Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Toggle pour Création de Compte */}
          <div className="mb-4 flex items-center">
            <span className="toggle-label mr-2">Créer un compte :</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="creerCompte"
                className="sr-only"
                onChange={toggleAccountFields}
              />
              <span className="slider"></span>
            </label>
            <span className="toggle-label ml-2 text-gray-700 font-semibold" id="toggleLabel">
              {createAccount ? "Oui" : "Non"}
            </span>
          </div>

          {/* Champs Supplémentaires pour la Création de Compte */}
          {createAccount && (
            <div id="accountFields">
              {/* Champ Login */}
              <div className="form-row mb-4 flex items-center space-x-2">
                <label
                  htmlFor="login"
                  className="w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
                >
                  <i className="fas fa-envelope mr-2"></i>Login
                </label>
                <input
                  type="text"
                  id="login"
                  name="login"
                  className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Champ Password */}
              <div className="form-row mb-2 flex items-center space-x-2">
                <label
                  htmlFor="password"
                  className="w-1/6 flex-shrink-0 font-semibold text-gray-700 flex items-center"
                >
                  <i className="fas fa-lock mr-2"></i>Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="reset"
              className="btn font-bold bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mr-12"
            >
              <i className="fas fa-times mr-2"></i>Annuler
            </button>
            <button
              type="submit"
              className="btn font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md"
            >
              <i className="fas fa-save mr-2"></i>Enregistrer
            </button>
          </div>
        </form>
      </div>

      {/* Suivi Dette Section */}
           <SuiviDette/>
    </div>
    );
};

export default DettePage;