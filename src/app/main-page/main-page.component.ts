import { Component, OnInit } from '@angular/core';
import { poUiStructure } from "../../../poUiStructure";
import { ReqDataService } from "app/req-data.service";


@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  inputs:[ 'headerDetails', 'lineItems' ],
  outputs:['poData'],
  providers : [ ReqDataService ]
})
export class MainPageComponent implements OnInit {
     
  poData : {};
   
  constructor(private _ReqDataService : ReqDataService) { }

  ngOnInit() {
      console.log("call service");
      this.poData = {};
    // this._ReqDataService.getAllDataFromDB()
    // .subscribe( resData => this.poData = resData );
  }

  onSaveDataInDB( poData ){
      debugger;
      console.log("save data in db");
      this._ReqDataService.addDataInDB( poData )
      .subscribe(resNewVideo =>{
        // this._ReqDataService.push(resNewVideo);
        this._ReqDataService = resNewVideo;
    }) 
  }

}
