var express = require('express');
var router = express.Router();
var TagPosts=require('../models/TagPost');

router.post('/',function(req,res,next){
    TagPosts.addTagPost(req.body,function(err,count){
        if(err)
        {
          res.json(err);
        }
        else{
          res.json(req.body);//or return count for 1 & 0
        }
    });
});

 router.post('/:id',function(req,res,next){
  TagPosts.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});

router.delete('/',function(req,res,next){
    TagPosts.deleteTagPost(req.body,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }

    });
});

module.exports=router;
