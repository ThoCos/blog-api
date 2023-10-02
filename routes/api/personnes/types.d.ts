export interface Personne {
  id: number;
  prenom: string;
  nom: string;
  date_de_naissance: string;
  avatar: string;
  numero_de_telephone: string;
  adresse_email: string;
  description: string;
}

export type Personnes = Personne[];
