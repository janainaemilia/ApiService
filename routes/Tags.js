var express = require('express');
var router = express.Router();
var Tags=require('../models/Tag');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Tags.getTagById(req.params.id,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Tags.getAllTags(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }

    });
}
});
router.post('/',function(req,res,next){
        Tags.addTag(req.body,function(err,count){
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
  Tags.deleteAll(req.body,function(err,count){
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
router.delete('/:id',function(req,res,next){

        Tags.deleteTag(req.params.id,function(err,count){

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
router.put('/:id',function(req,res,next){

    Tags.updateTag(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;
