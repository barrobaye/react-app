
  
  export interface User {
    id: number;
    email: string;
    password: string;
    role?: string;
    telephone?: string | null; // Ce champ peut être null selon votre backend
    client?: Client; // Relation avec le client
  }
  
  export interface Client {
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
  }