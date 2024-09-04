import React, { useState, useEffect } from 'react';
import { Article } from '../../model/Article';
import apiClient, { RestResponse } from '../../services/api.client';

const ArticlePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [newArticle, setNewArticle] = useState<Omit<Article, 'id'>>({ libelle: '', prix: 0, quantiteStock: 0 });
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiClient.get<RestResponse<Article[]>>('/article');
        setArticles(response.data.data);
      } catch (error) {
        console.log(error);
        setError('Erreur lors de la récupération des articles.');
      }
    };

    fetchArticles();
  }, []);

  const addArticle = async () => {
    try {
      const response = await apiClient.post<RestResponse<Article>>('/article', newArticle);
      setArticles([...articles, response.data.data]);
      setNewArticle({ libelle: '', prix: 0, quantiteStock: 0 });
    } catch (error) {
      console.log(error)

      setError('Erreur lors de l\'ajout de l\'article.');
    }
  };

  const updateArticle = async () => {
    if (editingArticle) {
      try {
        const response = await apiClient.put<RestResponse<Article>>(`/article/${editingArticle.id}`, newArticle);
        setArticles(articles.map(article => (article.id === editingArticle.id ? response.data.data : article)));
        setEditingArticle(null);
        setNewArticle({ libelle: '', prix: 0, quantiteStock: 0 });
      } catch (error) {
        console.log(error)

        setError('Erreur lors de la modification de l\'article.');
      }
    }
  };

  const removeArticle = async (id: number) => {
    try {
      await apiClient.delete<RestResponse<null>>(`/article/${id}`);
      setArticles(articles.filter(article => article.id !== id));
    } catch (error) {
      console.log(error)
      setError('Erreur lors de la suppression de l\'article.');
    }
  };

  const handleEdit = (article: Article) => {
    setEditingArticle(article);
    setNewArticle({ libelle: article.libelle, prix: article.prix, quantiteStock: article.quantiteStock });
  };

  return (
    <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col main-content">
      <div className="mb-4 flex justify-between flex-wrap">
        <span className="text-gray-600 text-xl font-bold mb-2 sm:mb-0">Approvisionnement</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setEditingArticle(null)}
        >
          Nouvelle Article
        </button>
      </div>

      {error && <div className="bg-red-200 text-red-800 p-2 rounded mb-4">{error}</div>}

      <div className="product-lists flex flex-wrap gap-4">
        {/* Liste des produits */}
        <div className="product-list bg-white rounded-lg shadow p-4 flex-1">
          <h2 className="text-2xl font-bold mb-4">Lister les produits</h2>
          <div className="mb-4 flex flex-wrap gap-2">
            <button className="bg-red-500 text-white px-4 py-2">RUP</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2">DIS</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2">ALL</button>
          </div>
          <div className="mb-4 flex">
            <input
              type="text"
              placeholder="Libelle"
              className="border rounded px-4 py-2 w-3/4"
              value={newArticle.libelle}
              onChange={(e) => setNewArticle({ ...newArticle, libelle: e.target.value })}
            />
            <input
              type="number"
              placeholder="Prix"
              className="border rounded px-4 py-2 w-1/4 ml-2"
              value={newArticle.prix}
              onChange={(e) => setNewArticle({ ...newArticle, prix: Number(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Quantité"
              className="border rounded px-4 py-2 w-1/4 ml-2"
              value={newArticle.quantiteStock}
              onChange={(e) => setNewArticle({ ...newArticle, quantiteStock: Number(e.target.value) })}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
              onClick={editingArticle ? updateArticle : addArticle}
            >
              {editingArticle ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="p-2 text-center">
                    <i className="fas fa-check-square"></i>
                  </th>
                  <th className="py-2 px-4 text-center">Article</th>
                  <th className="py-2 px-4 text-center">Prix</th>
                  <th className="py-2 px-4 text-center">Qte en stock</th>
                  <th className="py-2 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(articles) && articles.map(article => (
                  <tr key={article.id}>
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        name="article[]"
                        value={article.id}
                        className="form-checkbox h-4 w-4 text-blue-600"
                        onChange={() => setSelectedArticles(prev => 
                          prev.includes(article.id) ? prev.filter(id => id !== article.id) : [...prev, article.id]
                        )}
                        checked={selectedArticles.includes(article.id)}
                      />
                    </td>
                    <td className="py-2 px-4 text-center">{article.libelle}</td>
                    <td className="py-2 px-4 text-center">{article.prix}</td>
                    <td className="py-2 px-4 text-center">{article.quantiteStock}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        className="text-blue-500 mr-2"
                        onClick={() => handleEdit(article)}
                      >
                        <i className="fas fa-edit"></i> Modifier
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => removeArticle(article.id)}
                      >
                        <i className="fas fa-trash"></i> Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button className="px-3 py-1 border rounded mr-1">&lt;</button>
            <button className="px-3 py-1 border rounded mr-1 bg-blue-500 text-white">1</button>
            <button className="px-3 py-1 border rounded mr-1">2</button>
            <button className="px-3 py-1 border rounded">&gt;</button>
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
                {selectedArticles.map(id => {
                  const article = articles.find(a => a.id === id);
                  return article ? (
                    <tr key={article.id}>
                      <td className="py-2 px-4 text-center">{article.libelle}</td>
                      <td className="py-2 px-4 text-center">{article.prix}</td>
                      <td className="py-2 px-4 text-center">
                        <button className="px-2 py-1 border rounded">-</button>
                        <span className="mx-2">1</span>
                        <button className="px-2 py-1 border rounded">+</button>
                      </td>
                      <td className="py-2 px-4 text-center">
                        <button
                          className="text-red-500"
                          onClick={() => removeArticle(article.id)}
                        >
                          <i className="fas fa-trash"></i> Supprimer
                        </button>
                      </td>
                    </tr>
                  ) : null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
