import React, { useState, useEffect } from 'react';
import { Article } from '../../model/Article';
import ArticleModal from './component/ArticleModal';
import { ArticleService } from '../../services/articles/ArticleService';

const ArticlePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesData = await ArticleService.getAllArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error(error);
        setError('Erreur lors de la récupération des articles.');
      }
    };

    fetchArticles();
  }, []);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const displayedArticles = articles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  useEffect(() => {
    const initialQuantities = selectedArticles.reduce((acc, id) => {
      const article = articles.find((a) => a.id === id);
      if (article) {
        acc[id] = article.quantiteStock;
      }
      return acc;
    }, {} as Record<number, number>);
    setQuantities(initialQuantities);
  }, [selectedArticles, articles]);

  const handleIncrement = (id: number) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: number) => {
    setQuantities((prev) => {
      const newQuantity = (prev[id] || 0) - 1;
      return { ...prev, [id]: newQuantity > 0 ? newQuantity : 1 };
    });
  };

  const handleInputChange = (id: number, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value > 0 ? value : 1 }));
  };

  const handleSaveQuantities = async () => {
    const articlesToUpdate = selectedArticles.map((id) => {
        const originalArticle = articles.find(article => article.id === id);
        if (originalArticle) {
            const newQuantiteStock = Math.max(1, quantities[id]);
            return {
                id,
                data: {
                    quantiteStock: newQuantiteStock,
                },
            };
        }
        return null;
    }).filter((article): article is { id: number; data: { quantiteStock: number } } => article !== null);

    if (articlesToUpdate.length === 0) {
        setError("Aucun article sélectionné pour la mise à jour.");
        return;
    }

    try {
        // Appel à l'API pour mettre à jour les articles
        const updatedArticles = await ArticleService.updateArticles(articlesToUpdate);

        // Mise à jour de l'état local des articles
        setArticles((prev) => 
            prev.map((article) => 
                updatedArticles.find((updated) => updated.id === article.id) || article
            )
        );

        window.location.reload(); // Actualiser la page après la mise à jour
    } catch (error) {
        console.error("Erreur lors de la mise à jour des articles:", error);
        setError("Erreur lors de la sauvegarde des quantités. Veuillez réessayer.");
    }
};
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const removeArticle = async (id: number) => {
    try {
      await ArticleService.deleteArticle(id);
      setArticles(articles.filter(article => article.id !== id));
      setQuantities((prev) => {
        const newQuantities = { ...prev };
        delete newQuantities[id];
        return newQuantities;
      });
    } catch (error) {
      setError("Erreur lors de la suppression de l'article.");
      console.error(error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Fonction pour gérer l'ajout d'un nouvel article
  const handleArticleAdded = (newArticle: Article) => {
    setArticles((prev) => [...prev, newArticle]);
    toggleModal();
  };

  return (
    <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col main-content">
      <div className="mb-4 flex justify-between flex-wrap">
        <span className="text-gray-600 text-xl font-bold mb-2 sm:mb-0">Approvisionnement</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleModal}>
          Nouvelle Article
        </button>
      </div>

      {error && <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{error}</div>}

      <div className="product-lists flex flex-wrap gap-4">
        <div className="product-list bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-2xl font-bold mb-4">Lister les produits</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2 text-center"><i className="fas fa-check-square"></i></th>
                  <th className="py-2 px-4 text-center">Article</th>
                  <th className="py-2 px-4 text-center">Prix</th>
                  <th className="py-2 px-4 text-center">Qte en stock</th>
                </tr>
              </thead>
              <tbody>
                {displayedArticles.map((article) => (
                  <tr key={article.id}>
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        value={article.id}
                        className="form-checkbox h-4 w-4 text-blue-600"
                        onChange={() => setSelectedArticles((prev) => 
                          prev.includes(article.id) ? prev.filter((id) => id !== article.id) : [...prev, article.id]
                        )}
                        checked={selectedArticles.includes(article.id)}
                      />
                    </td>
                    <td className="py-2 px-4 text-center">{article.libelle}</td>
                    <td className="py-2 px-4 text-center">{article.prix}</td>
                    <td className="py-2 px-4 text-center">{article.quantiteStock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination buttons */}
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}
              disabled={currentPage === 1}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-2 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}
              disabled={currentPage === totalPages}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Liste des produits sélectionnés */}
        <div className="product-list bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-2xl font-bold mb-4">Produits sélectionnés</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4 text-center">Article</th>
                  <th className="py-2 px-4 text-center">Prix</th>
                  <th className="py-2 px-4 text-center">Quantité</th>
                  <th className="py-2 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {selectedArticles.map((id) => {
                  const article = articles.find((a) => a.id === id);
                  if (!article) return null;

                  const quantity = quantities[id] || article.quantiteStock;
                  return (
                    <tr key={article.id}>
                      <td className="py-2 px-4 text-center">{article.libelle}</td>
                      <td className="py-2 px-4 text-center">{article.prix}</td>
                      <td className="py-2 px-4 text-center">
                        <button className="px-2 py-1 border rounded" onClick={() => handleDecrement(article.id)}>-</button>
                        <input
                          value={quantity}
                          onChange={(e) => handleInputChange(article.id, Number(e.target.value))}
                          className="w-12 text-center mx-2"
                          min="1"
                        />
                        <button className="px-2 py-1 border rounded" onClick={() => handleIncrement(article.id)}>+</button>
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button className="text-red-500" onClick={() => removeArticle(article.id)}>
                          <i className="fas fa-trash"></i> Supprimer
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSaveQuantities}>
                Save 
              </button>
            </div>
          </div>
        </div>
      </div>

      <ArticleModal isOpen={isModalOpen} toggleModal={toggleModal} onArticleAdded={handleArticleAdded} />
    </main>
  );
};

export default ArticlePage;
