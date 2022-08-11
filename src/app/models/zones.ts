import { Quartier } from "./quartier";
import { Commande } from './commande';

export interface Zones{
  id:number;
  libelle: string;
  quartiers: Quartier[];
  commandes: Commande[];
  prix:number;
}
