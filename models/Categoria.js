var db=require('../dbconnection');

var Categoria={

getAllCategorias:function(callback){

return db.query("Select * from categoriaPost",callback);

},
getCategoriaById:function(id,callback){

    return db.query("Select * from categoriaPost where idCategoriaPost=?",[id],callback);
},
addCategoria:function(Categoria,callback){
   console.log("inside service");
   console.log(Categoria.idCategoria);
return db.query("Insert into categoriaPost (nomeCategoria) values(?)",[Categoria.nomeCategoria],callback);
//return db.query("insert into categoriaPost(Id,Title,Status) values(?,?,?)",[Categoria1.Id,Categoria1.Title,Categoria1.Status],callback);
},
deleteCategoria:function(id,callback){
    return db.query("Delete from categoriaPost where idCategoriaPost=?",[id],callback);
},
updateCategoria:function(id,Categoria,callback){
    return  db.query("Update categoriaPost set nomeCategoria=? where idCategoriaPost=?",[Categoria.nomeCategoria,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from categoriaPost where idCategoriaPost in (?)",[delarr],callback);
}
};
module.exports=Categoria;
