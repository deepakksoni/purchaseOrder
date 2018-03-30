export class poUiStructure {
    _id? : string;
    requestor? : string;
    currency? : string;
    companycode? : string;
    vendor? : string;
    materialGp? : string;
    purchaseOrg? : string;
    docType : string;
    createdDate? : string;
     materials : Array<{
        itemNo? : string ;
        material? : string;
        materialDesc? : string;
        plant? : string;
        storage? : string;
        unitPrice? : string;
        quantity? : string;
        totalPrice? : string;
        price? : string;
        matDescription? : string;
        _id? : string;
    }>

//    ]
}