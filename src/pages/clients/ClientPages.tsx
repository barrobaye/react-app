import React, { useState, useEffect } from 'react';
import { Client } from '../../model/Client';
import ClientService from '../../services/clients/ClientService';


const ClientPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    photo: null as File | null,
    login: '',
    password: ''
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await ClientService.getClients();
        setClients(response.data);
      } catch (error) {
        console.error('Failed to fetch clients:', error);
      }
    };

    fetchClients();
  }, []);

  const handleEdit = (client: Client) => {
    console.log('Edit client:', client);
  };

  const toggleAccountFields = () => {
    setCreateAccount(!createAccount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      photo: file
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <div
        id="clientModal"
        tabIndex={-1}
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex ${showModal ? '' : 'hidden'}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-full max-w-[95%] sm:max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow pt-10 px-4 pb-4 w-full max-w-[95%] sm:max-w-2xl mx-auto">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => setShowModal(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <h3 className="mb-4 text-lg font-normal text-gray-500">N. UTILISATEUR</h3>
            <div className="p-6 text-center border rounded-xl">
              <form
                method="POST"
                action="#"
                encType="multipart/form-data"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <label
                    htmlFor="nom"
                    className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                  >
                    <i className="fas fa-user mr-2"></i>Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <label
                    htmlFor="prenom"
                    className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                  >
                    <i className="fas fa-user mr-2"></i>Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <label
                    htmlFor="telephone"
                    className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                  >
                    <i className="fas fa-phone mr-2"></i>Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <label
                    htmlFor="adresse"
                    className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                  >
                    <i className="fas fa-map-marker-alt mr-2"></i>Adresse
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    name="adresse"
                    value={formData.adresse}
                    className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <label
                    htmlFor="photo"
                    className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                  >
                    <i className="fas fa-camera mr-2"></i>Photo
                  </label>
                  <input
  type="file"
  id="photo"
  name="photo"
  className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
  onChange={handleFileChange}
/>
                </div>

                {/* Toggle pour Création de Compte */}
                <div className="flex items-center justify-start gap-2">
                  <span className="font-semibold text-gray-700">Créer un compte :</span>
                  <div className="flex items-center">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        id="creerCompte"
                        className="sr-only"
                        onChange={toggleAccountFields}
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="ml-2 text-gray-700 font-semibold" id="toggleLabel">
                      {createAccount ? 'Oui' : 'Non'}
                    </span>
                  </div>
                </div>

                {/* Champs Supplémentaires pour la Création de Compte */}
                {createAccount && (
                  <div id="accountFields" className="space-y-6 mt-4">
                    {/* Champ Login */}
                    <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                      <label
                        htmlFor="login"
                        className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                      >
                        <i className="fas fa-envelope mr-2"></i>Login
                      </label>
                      <input
                        type="text"
                        id="login"
                        name="login"
                        value={formData.login}
                        className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Champ Password */}
                    <div className="form-row flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                      <label
                        htmlFor="password"
                        className="w-full sm:w-1/4 font-semibold text-gray-700 flex items-center"
                      >
                        <i className="fas fa-lock mr-2"></i>Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        className="input-shadow w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button
                    type="reset"
                    className="w-full sm:w-auto bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 flex items-center justify-center"
                  >
                    <i className="fas fa-times mr-2"></i>Annuler
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center"
                  >
                    <i className="fas fa-save mr-2"></i>Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Table */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Clients</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.prenom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.telephone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(client)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Editer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientPage;
