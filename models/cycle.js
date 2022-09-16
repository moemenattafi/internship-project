const db = require('../util/database');
module.exports= class Cycle {
  constructor (
    entreprise,
    numAction,
    themeDeFormation,
    lieuDeDeroulement,
    debutDePeriode,
    finDePeriode,
    horaireDeDebut,
    horaireDeFin ,
    debutPause,
    finPause,
    numSalle,
    creditDimpot,
    droitsDeTirageIndiv,
    droitsDeTirageCollect,
    modeDeFormation,
    gouvernorat
    ){
    this.entreprise=entreprise;
    this.numAction=numAction;
    this.themeDeFormation=themeDeFormation;
    this.lieuDeDeroulement=lieuDeDeroulement;
    this.debutDePeriode=debutDePeriode;
    this.finDePeriode=finDePeriode;
    this.horaireDeDebut=horaireDeDebut;
    this.horaireDeFin=horaireDeFin;
    this.debutPause=debutPause;
    this.finPause=finPause;
    this.numSalle=numSalle;
    this.creditDimpot=creditDimpot;
    this.droitsDeTirageIndiv=droitsDeTirageIndiv;
    this.droitsDeTirageCollect=droitsDeTirageCollect;
    this.modeDeFormation=modeDeFormation;
    this.gouvernorat=gouvernorat;
  }
  static fetchAll (){
    return db.execute('SELECT * from cycle');
  }
  static save (cycle){
    return db.execute('INSERT INTO cycle (entreprise,numAction,themeDeFormation,lieuDeDeroulement,debutDePeriode,finDePeriode,horaireDeDebut,horaireDeFin ,debutPause,finPause,numSalle,creditDimpot,droitsDeTirageIndiv,droitsDeTirageCollect,modeDeFormation,gouvernorat) VALUES (? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? )',
      [cycle.entreprise,
        cycle.numAction,
        cycle.themeDeFormation,
        cycle.lieuDeDeroulement,
        cycle.debutDePeriode,
        cycle.finDePeriode,
        cycle.horaireDeDebut,
        cycle.horaireDeFin,
        cycle.debutPause,
        cycle.finPause,
        cycle.numSalle,
        cycle.creditDimpot,
        cycle.droitsDeTirageIndiv,
        cycle.droitsDeTirageCollect,
        cycle.modeDeFormation,
        cycle.gouvernorat]);
  }
  static delete (id) {
    return db.execute('DELETE FROM cycle WHERE idcycle == ?',[id])
  }

};
/*
 "entreprise":"teEntreprise",
    "numAction":"3",
    "themeDeFormation":"telTheme",
    "lieuDeDeroulement":"telLieu",
    "debutDePeriode": "2022-08-06T23:00:00.000Z",
    "finDePeriode": "2022-08-11T23:00:00.000Z",
    "horaireDeDebut":"20:20:00",
    "horaireDeFin":"20:20:00",
    "debutPause":"20:20:00",
    "finPause":"20:20:00",
    "numSalle":3,
    "creditDimpot":3,
    "droitsDeTirageIndiv":3,
    "droitsDeTirageCollect":3,
    "modeDeFormation":"telMode",
    "gouvernorat":"telGouvernorat"*/
