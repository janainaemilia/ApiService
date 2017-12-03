var db=require('../dbconnection');

var TagPost={

getAllTagPosts:function(callback){

return db.query("Select * from itemTagPost",callback);

},
getTagPostById:function(TagPost,callback){

    return db.query("Select * from itemTagPost where idPost=? && idTagPost=?",[TagPost.idPost, TagPost.idTagPost],callback);
},
addTagPost:function(TagPost,callback){
   console.log("inside service");
   console.log(TagPost.idTagPost);
return db.query("Insert into itemTagPost (idPost,idTagPost) values(?,?)",[TagPost.idPost, TagPost.idTagPost],callback);
//return db.query("insert into itemTagPost(Id,Title,Status) values(?,?,?)",[TagPost1.Id,TagPost1.Title,TagPost1.Status],callback);
},
deleteTagPost:function(TagPost,callback){
    return db.query("Delete from itemTagPost where idPost=? && idTagPost=?",[TagPost.idPost, TagPost.idTagPost],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from itemTagPost where idTagPostPost in (?)",[delarr],callback);
}
};
module.exports=TagPost;
