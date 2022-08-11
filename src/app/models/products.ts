import { TailleBoisson } from "./tailleBoisson";
import { Type } from "./type";

export interface Products {
  id: number;
  libelle: string;
  prix: number;
  image: Blob;
  gestionnaire:number;
  type: Type;
  is_active: boolean;
  qty:number;
  composant:TailleBoisson[];
  menus: [
    {
      quantity:number,
      product:Products,
    }

  ];

}
