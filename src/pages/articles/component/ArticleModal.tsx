import { useEffect, useState } from "react";
import { Article } from "../../../model/Article";
import { ArticleService } from "../../../services/articles/ArticleService";
import { CategorieService } from "../../../services/categorie/CategorieService";
import { Categorie } from "../../../model/Categorie";

interface ArticleModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  onArticleAdded: (newArticle: Article) => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  toggleModal,
  onArticleAdded,
}) => {
  const [formData, setFormData] = useState<Omit<Article, "id">>({
    libelle: "",
    prix: 0,
    quantiteStock: 0,
    categoriId: 0, // Corrected: Using 'categoriId'
  });

  const [categories, setCategories] = useState<Categorie[]>([]); 
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categorieData = await CategorieService.getAllCategorie();
        setCategories(categorieData);
  
        // Ensure a valid category ID is set
        if (categorieData.length > 0) {
          setFormData((prev) => ({
            ...prev,
            categoriId: categorieData[0]?.id ?? 0, // Corrected: Use 'categoriId'
          }));
        }
      } catch (error) {
        console.error(error);
        setError("Erreur lors de la récupération des catégories.");
      }
    };
  
    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "prix" || name === "quantiteStock" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newArticle = await ArticleService.addArticle(formData);
      onArticleAdded(newArticle);
      setFormData({
        libelle: "",
        prix: 0,
        quantiteStock: 0,
        categoriId: categories[0]?.id || 0, // Reset with default category ID
      });
      toggleModal(); // Close modal after submission
    } catch (error) {
      console.error("Échec de l'ajout de l'article :", error);
      setError("Échec de l'ajout de l'article. Veuillez vérifier les informations et réessayer.");
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
          <h2 className="text-xl font-bold mb-4">Ajouter un nouvel article</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="libelle" className="block font-semibold text-gray-700 mb-1">
                Libelle:
              </label>
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
              <label htmlFor="prix" className="block font-semibold text-gray-700 mb-1">
                Prix Unitaire:
              </label>
              <input
                type="number"
                id="prix"
                name="prix"
                value={formData.prix}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantiteStock" className="block font-semibold text-gray-700 mb-1">
                Quantité:
              </label>
              <input
                type="number"
                id="quantiteStock"
                name="quantiteStock"
                value={formData.quantiteStock}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoriId" className="block font-semibold text-gray-700 mb-1">
                Categorie:
              </label>
              <select
                id="categoriId"
                name="categoriId" // Corrected: Use 'categoriId'
                value={formData.categoriId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((categorie) => (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.libelle}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Sauvegarder
            </button>
            {error && <p className="text-red-500">{error}</p>} {/* Display the error if necessary */}
          </form>
        </div>
      </div>
    )
  );
};

export default ArticleModal;
