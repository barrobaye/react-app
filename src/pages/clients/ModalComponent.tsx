import React, { useState } from 'react';
import ClientService from '../../services/clients/ClientService';
import { Client } from '../../model/Client';

// Define the props type for ClientModal


interface ClientModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  onClientAdded: (newClient: Client) => void;
}

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, toggleModal, onClientAdded }) => {
  const [formData, setFormData] = useState<Client>({
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    photo: null,
    login: '',
    password: ''
  });

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
    try {
      const newClient = await ClientService.createClient(formData); // No need to unwrap data here
      onClientAdded(newClient); // Pass the new client object directly
      toggleModal(); // Close the modal after submission
    } catch (error) {
      console.error('Failed to add client:', error);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto z-50 relative">
          <button 
            onClick={toggleModal} 
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <h2 className="text-xl font-bold mb-4">Ajouter un nouveau client</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nom" className="block font-semibold text-gray-700 mb-1">Nom:</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="prenom" className="block font-semibold text-gray-700 mb-1">Prenom:</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="telephone" className="block font-semibold text-gray-700 mb-1">Telephone:</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="adresse" className="block font-semibold text-gray-700 mb-1">Adresse:</label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="photo" className="block font-semibold text-gray-700 mb-1">Photo:</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="login" className="block font-semibold text-gray-700 mb-1">Login (optionnel):</label>
              <input
                type="text"
                id="login"
                name="login"
                value={formData.login}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <label htmlFor="password" className="block font-semibold text-gray-700 mb-1">Password (optionnel):</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sauvegarder
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ClientModal;
