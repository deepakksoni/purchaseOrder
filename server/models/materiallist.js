var mongoose = require('mongoose');
var Schema = mongoose.Schema; // create schema instance

const materialList = new Schema({ // 1. create new schema 2. Blue print of your Schema
    vendor : String,
    purchaseOrg : String,
    docType : String,
    companycode : String,
    currency : String,
    requestor : String,
    materials : [{
        material : String,
        matDescription : String,
        plant : String,
        storage : String,
        price : String,
        quantity : String
    }]
});

module.exports = mongoose.model('materiallist', materialList);
