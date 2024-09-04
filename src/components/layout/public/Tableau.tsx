const Tableau = ()=>{
    return(
        <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col main-content">
        <div className="product-lists">
          <div className="product-list bg-white rounded-lg shadow p-4 w-full">
            <div className="mb-4 text-xl font-bold text-black">Lister Clients</div>
  
            {/* Filter and New Client Button */}
            <div className="flex flex-wrap justify-between items-center mb-4">
              {/* Filter by Phone */}
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
              {/* New Client Button */}
              <div className="flex gap-4">
                <button
                  data-modal-target="clientModal"
                  data-modal-toggle="clientModal"
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
                    <th className="px-6 py-3 text-left">MONTANT DUE</th>
                    <th className="px-6 py-3 text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {/* Row 1 */}
                  <tr className="border-t">
                    <td className="px-6 py-4">Ibrahima Diallo</td>
                    <td className="px-6 py-4">785619115</td>
                    <td className="px-6 py-4">Dakar, Senegal</td>
                    <td className="px-6 py-4">5000 FCFA</td>
                    <td className="px-6 py-4">
                      <a href="../Boutiquier/listDettesClient.html">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                          Détails
                        </button>
                      </a>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="border-t">
                    <td className="px-6 py-4">Amina Ndiaye</td>
                    <td className="px-6 py-4">785619115</td>
                    <td className="px-6 py-4">Thiès, Senegal</td>
                    <td className="px-6 py-4">15.000 FCFA</td>
                    <td className="px-6 py-4">
                      <a href="../Boutiquier/listDettesClient.html">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                          Détails
                        </button>
                      </a>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="border-t">
                    <td className="px-6 py-4">Moussa Fall</td>
                    <td className="px-6 py-4">785619115</td>
                    <td className="px-6 py-4">Saint-Louis, Senegal</td>
                    <td className="px-6 py-4">10.000 FCFA</td>
                    <td className="px-6 py-4">
                      <a href="../Boutiquier/listDettesClient.html">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                          Détails
                        </button>
                      </a>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr className="border-t">
                    <td className="px-6 py-4">Fatou Diop</td>
                    <td className="px-6 py-4">785619115</td>
                    <td className="px-6 py-4">Kaolack, Senegal</td>
                    <td className="px-6 py-4">10.000 FCFA</td>
                    <td className="px-6 py-4">
                      <a href="../Boutiquier/listDettesClient.html">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                          Détails
                        </button>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div className="flex justify-end mt-4 mb-2 sm:mb-0 space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded-md shadow hover:bg-gray-400">
                &lt;
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                1
              </button>
              <button className="px-3 py-1 bg-gray-300 rounded-md shadow hover:bg-gray-400">
                2
              </button>
              <button className="px-3 py-1 bg-gray-300 rounded-md shadow hover:bg-gray-400">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </main>
    );
    
}
export default Tableau;