var db=require('../dbconnection');

var Midia={

getAllMidias:function(callback){

return db.query("Select * from midia",callback);

},
getMidiaById:function(id,callback){

    return db.query("Select * from midia where idMidia=?",[id],callback);
},
addMidia:function(Midia,callback){
   console.log("inside service");
   console.log(Midia.idMidia);
return db.query("Insert into midia (nomeMidia, caminhoMidia, idPost) values (?,?,?)",[Midia.nomeMidia,Midia.caminhoMidia,Midia.idPost],callback);
//return db.query("insert into midia(Id,Title,Status) values(?,?,?)",[Midia1.Id,Midia1.Title,Midia1.Status],callback);
},
deleteMidia:function(id,callback){
    return db.query("Delete from midia where idMidia=?",[id],callback);
},
updateMidia:function(id,Midia,callback){
    return  db.query("Update midia set nomeMidia=?, caminhoMidia=? Where idMidia=?",[Midia.nomeMidia, Midia.caminhoMidia,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from midia where idMidia in (?)",[delarr],callback);
}
};
module.exports=Midia;
