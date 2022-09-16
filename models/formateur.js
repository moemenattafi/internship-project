const db = require("../util/database");

module.exports= class Formateur{
  constructor (nomEtPrenom,specialite,direction){
    this.nomEtPrenom =nomEtPrenom;
    this.specialite=specialite;
    this.direction=direction;
  }
  static fetchAll (){
    return db.execute('SELECT * from formateur');
  }

  static save (formateur){
    return db.execute('INSERT INTO formateur (nomEtPrenom,specialite,direction) VALUES (? ,? ,?)',
      [formateur.nomEtPrenom,formateur.specialite,formateur.direction]);
  }
  
  static delete (id) {
    return db.execute('DELETE FROM formateur WHERE idformateur = ?',[id])
  }


};
