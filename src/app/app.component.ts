import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Purchase Order'; //Header of application
  headerDetails = { // header label
       headerTitle : 'Header Info',
       requester : "Requestor",
       companyCode : "Company Code",
       vendor : "Vendor",
       materialGp : "Material Group",
       purchseOrg : "Purchase Org",
       currency : "Currency",
       docType : "Document Type",
       createdDate : "Created Date"     
    };
  lineItems = { //item level label
         select : "Select",
         material : "Material",
         materialDescription : "Material Description",
         plant : "Plant",
         storage : "Storage",
         unitPrice : "Unit Price",
         quantity : "Quantity",
         totalPrice : "Total Price"
       }  
}
