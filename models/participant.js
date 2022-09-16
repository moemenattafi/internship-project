const db = require("../util/database");
module.exports= class Participant{
  constructor (nomEtPrenom,numCin,directionEtService,entreprise){
    this.nomEtPrenom =nomEtPrenom;
    this.numCin=numCin;
    this.directionEtService=directionEtService;
    this.entreprise=entreprise;
  }
  static find(numCin){
    return db.execute('SELECT * FROM participant WHERE numCin=?',[numCin]);

  }


  static save (participant){
    return db.execute('INSERT INTO participant (nomEtPrenom,numCin,directionEtService,entreprise) VALUES (? ,? ,? ,?)',
      [participant.nomEtPrenom,participant.numCin,participant.directionEtService,participant.entreprise]);
  }
  
};
