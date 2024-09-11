import React, { useState, useEffect } from 'react';
import ClientService from '../../services/clients/ClientService';
import ClientModal from '../../components/layout/public/ModalComponent';
import { Client } from '../../model/Client';

const ClientPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClientAdded = (newClient: Client) => {
    setClients((prevClients) => [...prevClients, newClient]);
  };

  return (
    <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col main-content">
      <div className="product-lists">
        <div className="product-list bg-white rounded-lg shadow p-4 w-full">
          <div className="mb-4 text-xl font-bold text-black">Lister Clients</div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Filtrer par Telephone"
                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none w-1/2"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                OK
              </button>
            </div>
            <div className="flex gap-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 mt-2 sm:mt-0"
              >
                Nouvelle Client
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">PRENOM ET NOM</th>
                  <th className="px-6 py-3 text-left">TELEPHONE</th>
                  <th className="px-6 py-3 text-left">ADRESSE</th>
                  {/* <th className="px-6 py-3 text-left">MONTANT DUE</th> */}
                  <th className="px-6 py-3 text-left">ACTION</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {clients.map((client) => (
                  <tr key={client.id} className="border-t">
                    <td className="px-6 py-4">{client.prenom} {client.nom}</td>
                    <td className="px-6 py-4">{client.telephone}</td>
                    <td className="px-6 py-4">{client.adresse}</td>
                    {/* <td className="px-6 py-4">{client.montantDue}</td> */}
                    <td className="px-6 py-4">
                      <a href={`../boutiquier/dette?id=${client.id}`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                          Détails
                        </button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ClientModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        onClientAdded={handleClientAdded}
      />
    </main>
  );
};

export default ClientPage;

      {/* <div className="p-6">
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
    */}

