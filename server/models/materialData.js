module.exports = {
    setAllDataInDB : function ( req, materiallistObj ){
   
        materiallistObj.vendor = req.body.vendor;
        materiallistObj.purchaseOrg = req.body.purchaseOrg;
        materiallistObj.docType = req.body.docType;
        materiallistObj.companycode = req.body.companycode;
        materiallistObj.currency = req.body.currency;
        materiallistObj.requestor = req.body.requestor;

        req.body.materials.forEach(function(material) {
            materiallistObj.materials.push(material);           
        }, this);  
            
        return materiallistObj;
    }
}
