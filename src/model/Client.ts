export interface Client {
  id?: string; // Make id optional
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
  photo?: File | null;
  login: string;
  password: string;
  }