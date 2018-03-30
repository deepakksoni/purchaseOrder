import { Component, OnInit } from '@angular/core';
import { poUiStructure } from "../../../poUiStructure";

@Component({
  selector: 'req-header',
  templateUrl: './req-header.component.html',
  styleUrls: ['./req-header.component.css'],
  inputs : ['headerDetails', 'poData']
})
export class ReqHeaderComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
   
  }
//  onSaveDataInDB(poUiStru : poUiStructure, poData){
//     debugger;
//     console.log(poUiStru);
//   } 
}
