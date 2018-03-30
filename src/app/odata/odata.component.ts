import { Component, OnInit } from '@angular/core';
// import { ODataConfiguration, ODataServiceFactory, ODataService } from "angular-odata-es5";


@Component({
  selector: 'app-odata',
  templateUrl: './odata.component.html',
  styleUrls: ['./odata.component.css']
})
export class OdataComponent implements OnInit {
  dataSource: {
    store: {
      type: string;
      url: string;
    };
    select: string[];
  };

//   constructor( private odata: ODataService ) {
    

//   }

  ngOnInit() {
  }
//    testGet() {
//         let urlOptions: IUrlOptions = <IUrlOptions>{};
//         urlOptions.restOfUrl = "Products?$format=json";
//         this.odata.Request(RequestTypes.get, urlOptions).subscribe(
//             data => this.requestResult = data,
//             error => alert(error)
//         );
//     }

//     testPost() {
//         let urlOptions: IUrlOptions = <IUrlOptions>{};
//         this.odata.Request(RequestTypes.post, urlOptions).subscribe(
//             data => this.requestResult = data,
//             error => alert(error)
//         );
//     }

//     testPut() {
//         let urlOptions: IUrlOptions = <IUrlOptions>{};
//         this.odata.Request(RequestTypes.put, urlOptions).subscribe(
//             data => this.requestResult = data,
//             error => alert(error)
//         );
//     }

//     testPatch() {
//         let urlOptions: IUrlOptions = <IUrlOptions>{};
//         this.odata.Request(RequestTypes.patch, urlOptions).subscribe(
//             data => this.requestResult = data,
//             error => alert(error)
//         );
//     }

//     testDelete() {
//         let urlOptions: IUrlOptions = <IUrlOptions>{};
//         this.requestResult = this.odata.Request(RequestTypes.delete, urlOptions);
//     }
}
