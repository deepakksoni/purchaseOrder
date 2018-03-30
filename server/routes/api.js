const express = require('express');
const router = express.Router(); //express router
const mongoose = require('mongoose');// require mongoose connection
const materialList = require("../models/materiallist");
      mongoose.Promise = global.Promise;    

const materialListPath = require('../models/materialData');
mongoose.connect("mongodb://localhost/purchaseReq",function(err){// connection for local db
    if(err){
        console.error("Error!" + err);
    }else{
        console.log("successfully connected");
    }
});   

router.get('/getalldata', function(req, res){ //get all data from DB
    materialList.find({})
        .exec(function(err, materialLists){
            if(err){
                console.log("ERRRR");
            }else{
                res.json(materialLists);
            }
   })
});

router.get('/getalldata/:id', function(req, res){//get ID from url
    console.log(req.params.id );
    materialList.findById(req.params.id)
    .exec(function(err, materialList){
            if(err){
                console.log("ERRRR");
            }else{
                res.json(materialList);
            }
   })
});

router.post('/saveData',function(req,res){
    var matList = new materialList();// create a new instance
    var materialListObject = materialListPath.setAllDataInDB( req, matList );//call that method
     console.log(JSON.stringify(req.body));
     materialListObject.save(function(err, inserted){//saving data in db
            if(err){
                console.log("Error in save data");
            }else{
                res.json(inserted);
            }
    });
});

router.put('/updateData/:id', function(req, res){
    var matList = {materials:[]};
     var materialListObject = materialListPath.setAllDataInDB( req, matList );//call that method
    materialList.findByIdAndUpdate(req.params.id,
       {
            $set : materialListObject //set all the data
        },
        {
            new : true
        },
        function(err, updateData){
            if (err) {
                console.log("Error in updating Data");
            }else{
                res.json(updateData);
            }
        }
    )
});

router.delete('/delete/:id', function(req, res){
    console.log('deleting line item');
    materialList.findByIdAndRemove(req.params.id, function(err, deletedLine){
        if (err) {
            console.log("Error in deleteing line item");
        }else{
            res.json(deletedLine);
        }
    })
})

module.exports = router; //export the router

