import "./DettePages.css";

const SuiviDette = ( ) =>{
    return(
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ width: "740px" }}>
  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-800">
    <i className="fas fa-search-dollar mr-2"></i>Suivi de Dette
  </h2>
  <form className="mb-4 flex flex-col sm:flex-row gap-2" method="POST" action="#">
    <input type="hidden" name="action" value="searchClient" />
    <label htmlFor="telephone" className="w-full sm:w-auto flex-shrink-0 font-semibold text-gray-700 flex items-center">
      <i className="fas fa-phone mr-2"></i>Tél :
    </label>
    <input
      type="tel"
      id="telephone"
      name="telephone"
      className="input-shadow flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
    <button type="submit" className="btn bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2 sm:mt-0">
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
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        <i className="fas fa-user-circle text-4xl sm:text-6xl"></i>
      </div>
    </div>

    {/* Champs de saisie et Code QR */}
    <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
      <div className="space-y-4 flex-grow">
        <div className="mb-2">
          <label htmlFor="nom" className="block font-semibold text-gray-700 mb-1">
            <i className="fas fa-user mr-2"></i>Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="prenom" className="block font-semibold text-gray-700 mb-1">
            <i className="fas fa-user mr-2"></i>Prénom :
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="adresse" className="block font-semibold text-gray-700 mb-1">
            <i className="fas fa-map-marker-alt mr-2"></i>Adresse :
          </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Espace pour afficher le code QR */}
      <div className="flex items-center justify-center">
        <div id="qr-code" className="w-40 h-40 sm:w-48 sm:h-48 border border-gray-300 flex items-center justify-center">
          {/* Remplacez cette image par un vrai code QR */}
          <img src="" alt="Code QR" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default SuiviDette;