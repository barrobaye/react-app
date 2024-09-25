import { Article } from '../../model/Article';
import apiClient, { RestResponse } from '../api.client';

export const ArticleService = {
  async getAllArticles(): Promise<Article[]> {
    try {
      const response = await apiClient.get<RestResponse<Article[]>>('/article');
      return response.data.data; // Accédez aux articles à partir de la réponse
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      throw error;
    }
  },

  async addArticle(article: Omit<Article, 'id'>): Promise<Article> {
    try {
      const response = await apiClient.post<RestResponse<Article>>('/article', article);
      return response.data.data;
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article:", error);
      throw error;
    }
  },

  async updateArticles(articles: { id: number; data: { quantiteStock: number } }[]) {
    try {
        const response = await apiClient.put(`/article/${articles[0].id}`, articles);
        console.log("Updated articles:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating articles:", error);
        throw error;
    }
},
 

  async deleteArticle(id: number): Promise<void> {
    try {
      await apiClient.delete(`/article/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article:", error);
      throw error;
    }
  }
};
