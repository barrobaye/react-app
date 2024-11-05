export interface Client {
  id?: number; // Make id optional
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
  photo?: File | null;
  login: string;
  password: string;
  }