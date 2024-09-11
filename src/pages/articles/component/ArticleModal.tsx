import { Article } from "../../../model/Article";

interface ArticleModalProps {
    isOpen: boolean;
    toggleModal: () => void;
    onClientAdded: (newArticle: Article) => void;
  }
const ArticleModal: React.FC <ArticleModalProps> = ({isOpen, toggleModal, onClientAdded}) =>{
   
      
      
        const [formData, setFormData] = useState<Article>({
          libelle: '',
          prix:'',
          quantiteStock: '',
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
                <h2 className="text-xl font-bold mb-4">Ajouter un nouveau article</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="libelle" className="block font-semibold text-gray-700 mb-1">Libelle:</label>
                    <input
                      type="text"
                      id="libelle"
                      name="libelle"
                      value={formData.libelle}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="prix" className="block font-semibold text-gray-700 mb-1">Prix Unitaire:</label>
                    <input
                      type="text"
                      id="prix"
                      name="prix"
                      value={formData.prix}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="quantiteStock" className="block font-semibold text-gray-700 mb-1">Quantité:</label>
                    <input
                      type="text"
                      id="quantiteStock"
                      name="quantiteStock"
                      value={formData.quantiteStock}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="adresse" className="block font-semibold text-gray-700 mb-1">Adresse:</label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="photo" className="block font-semibold text-gray-700 mb-1">Photo:</label>
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      onChange={handleFileChange}
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
      
      export default ArticleModal;