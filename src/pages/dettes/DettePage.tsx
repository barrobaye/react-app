import { useState } from "react";

const DettePage = () =>{
    
        const [createAccount, setCreateAccount] = useState(false);

    const toggleAccountFields = () => {
      setCreateAccount(!createAccount);
    };
    return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Nouveau Client Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
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
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-800">
          <i className="fas fa-search-dollar mr-2"></i>Suivi de Dette
        </h2>
        <form className="mb-4 flex flex-col sm:flex-row gap-2" method="POST" action="#">
          <input type="hidden" name="action" value="searchClient" />
          <label
            htmlFor="telephone"
            className="w-full sm:w-auto flex-shrink-0 font-semibold text-gray-700 flex items-center"
          >
            <i className="fas fa-phone mr-2"></i>Tél :
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="btn bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2 sm:mt-0"
          >
            <i className="fas fa-search mr-2"></i>OK
          </button>
        </form>

        {/* Boutons organisés et centrés */}
        <div className="mb-4 flex flex-wrap justify-start gap-4 sm:gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <i className="fas fa-user mr-2"></i>Infos
          </button>
          <a href="../Boutiquier/listDettesClient.html" className="flex">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center">
              <i className="fas fa-file-invoice-dollar mr-2"></i>Dettes
            </button>
          </a>
          <a href="../Boutiquier/nouvelleDette.html" className="flex">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded flex items-center">
              <i className="fas fa-plus mr-2"></i>Nouvelle
            </button>
          </a>
        </div>

        {/* Résultats de la recherche */}
        <div className="flex flex-col items-center">
          {/* Photo de l'utilisateur */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-full overflow-hidden mb-4">
            <img
              src="../images/default_profile.png"
              alt="User Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Liste des dettes */}
          <ul className="w-full space-y-2">
            <li className="bg-red-500 text-white p-2 rounded-md flex justify-between">
              <span className="flex items-center">
                <i className="fas fa-file-invoice-dollar mr-2"></i>Dette: 1000 F
              </span>
              <a href="../Boutiquier/nouveauPaiement.html" className="flex">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                  <i className="fas fa-money-bill-wave mr-2"></i>Payer
                </button>
              </a>
            </li>
            <li className="bg-green-600 text-white p-2 rounded-md flex justify-between">
              <span className="flex items-center">
                <i className="fas fa-file-invoice-dollar mr-2"></i>Dette: 2000 F
              </span>
              <a href="../Boutiquier/nouveauPaiement.html" className="flex">
                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                  <i className="fas fa-money-bill-wave mr-2"></i>Payer
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default DettePage;