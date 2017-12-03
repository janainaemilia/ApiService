var db=require('../dbconnection');

var Tag={

getAllTags:function(callback){

return db.query("Select * from tagPost",callback);

},
getTagById:function(id,callback){

    return db.query("Select * from tagPost where idTagPost=?",[id],callback);
},
addTag:function(Tag,callback){
   console.log("inside service");
   console.log(Tag.idTag);
return db.query("Insert into tagPost (nomeTag) values (?)",[Tag.nomeTag],callback);
//return db.query("insert into tagPost(Id,Title,Status) values(?,?,?)",[Tag1.Id,Tag1.Title,Tag1.Status],callback);
},
deleteTag:function(id,callback){
    return db.query("Delete from tagPost where idTagPost=?",[id],callback);
},
updateTag:function(id,Tag,callback){
    return  db.query("Update tagPost set nomeTag=? Where idTagPost=?",[Tag.nomeTag,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from tagPost where idTagPost in (?)",[delarr],callback);
}
};
module.exports=Tag;
