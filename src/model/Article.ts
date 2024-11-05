export interface Article {
  id?: number;
  libelle: string;
  prix: number;
  quantiteStock: number; 
  categoriId: number;
  createdAt?: string;
  updatedAt?: string;
}