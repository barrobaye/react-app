export interface Article {
  id?: number;
  libelle: string;
  prix: number;
  quantiteStock: number; 
  categorie: number;
  createdAt?: string;
  updatedAt?: string;
}