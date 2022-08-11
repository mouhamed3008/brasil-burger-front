import { Products } from "./products";
import { TailleBoisson } from "./tailleBoisson";

export interface Commande {
  isSelected: boolean;
  id: number;
  client: User;
  commandeAt:Date;
  status: string;
  numero: string;
  produits:[
    {
      qty:number;
      product:{id: number};
      components:[
        {
          boisson:  {id: number};
          qty:number;
        }
      ]
    }
  ]
}



export interface User{
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
}
