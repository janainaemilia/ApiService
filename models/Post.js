var db=require('../dbconnection');

var Post={

getAllPosts:function(callback){

return db.query("Select * from post " +
                "inner join categoriaPost on categoriaPost.idCategoriaPost = post.idCategoriaPost " +
                "inner join itemtagpost on post.idPost = itemtagpost.idPost " +
                "inner join tagpost on tagpost.idTagPost = itemtagpost.idTagPost " +
                "left join midia on post.idPost = midia.idPost " +
                "order by post.idPost",callback);
},

getPostById:function(id,callback){

    return db.query("Select * from post " +
                    "inner join categoriaPost on categoriaPost.idCategoriaPost = post.idCategoriaPost " +
                    "inner join itemtagpost on post.idPost = itemtagpost.idPost " +
                    "inner join tagpost on tagpost.idTagPost = itemtagpost.idTagPost " +
                    "left join midia on post.idPost = midia.idPost " +
                    "where post.idPost=?" +
                    "order by post.idPost",[id],callback);
},
addPost:function(Post,callback){
   console.log("inside service");
   console.log(Post.idPost);
return db.query("Insert into post(tituloPost, textoPost, dataPost, atualizacaoPost, idCategoriaPost) values(?,?,?,?,?)",[Post.tituloPost, Post.textoPost, Post.dataPost, Post.atualizacaoPost, Post.idCategoriaPost],callback);
//return db.query("insert into post(Id,Title,Status) values(?,?,?)",[Post1.Id,Post1.Title,Post1.Status],callback);
},
deletePost:function(id,callback){
    return db.query("Delete from post where idPost=?",[id],callback);
},
updatePost:function(id,Post,callback){
    return  db.query("Update post set tituloPost=?,textoPost=?, dataPost=?, atualizacaoPost=?, idCategoriaPost=? where idPost=?",[Post.tituloPost, Post.textoPost, Post.dataPost, Post.atualizacaoPost, Post.idCategoriaPost,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from post where idPost in (?)",[delarr],callback);
}
};
module.exports=Post;
