import { Time } from "@angular/common";

export interface Cycle {
  idcycle : number ;
  entreprise :string;
  numAction :number;
  themeDeFormation:string;
  lieuDeDeroulement:string;
  debutDePeriode:Date;
  finDePeriode:Date;
  horaireDeDebut:Time;
  horaireDeFin :Time;
  debutPause:Time;
  finPause:Time;
  numSalle:number;
  creditDimpot:number;
  droitsDeTirageIndiv:number;
  droitsDeTirageCollect:number;
  modeDeFormation:string;
  gouvernorat:string;
}
