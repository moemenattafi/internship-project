const db = require("../util/database");

module.exports= class Admin{
  constructor (name,email,password){
    this.name =name;
    this.email=email;
    this.password=password;
  }
  static find(email){
    return db.execute('SELECT * FROM administrators WHERE email=?',[email]);

  }
  static save (admin){
    return db.execute('INSERT INTO administrators (name,email,password) VALUES (? ,? ,?)',
      [admin.name,admin.email,admin.password]);
  }

};
