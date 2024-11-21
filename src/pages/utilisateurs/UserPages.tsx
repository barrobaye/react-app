import React, { useEffect, useState } from "react";
import UserServices from "../../services/users/UsersServices";
import { User } from "../../model/Users";

const UserPages = () => {
  const [users, setUsers] = useState<User[]>([]); // Initialiser avec un tableau vide
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserServices.getClients();
        const fetchedUsers = response.data?.users || []; // Récupérer la liste des utilisateurs
        setUsers(fetchedUsers); // Mettre à jour l'état
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false); // Arrêter le chargement
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="product-lists">
        <div className="product-list bg-white rounded-lg shadow p-4 w-full">
          <div className="mb-4 text-xl font-bold text-black">Ecran Admin</div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Role</th>
                  <th className="px-6 py-3 text-left">Nom Complet</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Téléphone</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-6 py-4">{user.role || "N/A"}</td>
                    <td className="px-6 py-4">
                      {user.client
                        ? `${user.client.nom} ${user.client.prenom}`
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.client?.telephone || "N/A"}</td>
                    <td className="px-6 py-4">
                      <a href={`/user/details/${user.id}`}>Détails</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserPages;
