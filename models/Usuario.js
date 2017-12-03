var db=require('../dbconnection');

var Usuario={

getAllUsuarios:function(callback){
return db.query("Select * from usuario",callback);
},
getUsuarioById:function(id,callback){
    return db.query("Select * from usuario Where idUsuario=?",[id],callback);
},
addUsuario:function(Usuario,callback){
   console.log("inside service");
   console.log(Usuario.idUsuario);
return db.query("Insert into usuario(nome, email, senha) values(?,?,?)",[Usuario.nome, Usuario.email, Usuario.senha],callback);
},
deleteUsuario:function(id,callback){
    return db.query("Delete from usuario where idUsuario=?",[id],callback);
},
updateUsuario:function(id,Usuario,callback){
    return  db.query("Update usuario set nome=?, email=?, senha=? where idUsuario=?",[Usuario.nome, Usuario.email, Usuario.senha,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from usuario where idUsuario in (?)",[delarr],callback);
}
};
module.exports=Usuario;
