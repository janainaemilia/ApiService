var express = require('express');
var router = express.Router();
var Midias=require('../models/Midia');

router.get('/:id?',function(req,res,next){

if(req.params.id){

    Midias.getMidiaById(req.params.id,function(err,rows){

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

 Midias.getAllMidias(function(err,rows){
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
        Midias.addMidia(req.body,function(err,count){

            //console.log(req.body);
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
  Midias.deleteAll(req.body,function(err,count){
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

        Midias.deleteMidia(req.params.id,function(err,count){

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

    Midias.updateMidia(req.params.id,req.body,function(err,rows){

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
