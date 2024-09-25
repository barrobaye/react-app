import { Categorie } from "../../model/Categorie";
import apiClient, { RestResponse } from "../api.client";

export const CategorieService = {
    async getAllCategorie(): Promise<Categorie[]> {
      try {
        const response = await apiClient.get<RestResponse<Categorie[]>>('/categorie');
        return response.data.data; // Accédez aux articles à partir de la réponse
      } catch (error) {
        console.error('Erreur lors de la récupération des categorie:', error);
        throw error;
      }
    },
}