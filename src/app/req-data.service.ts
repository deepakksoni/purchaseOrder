import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { poUiStructure } from "../../poUiStructure";

@Injectable()
export class ReqDataService {
 
  private _getCreateURI = "/api/saveData";
  private _getURI = '/api/getalldata/5965ec47fcb5591c7466199b';

  constructor(private _http : Http) { }
  
  getAllDataFromDB(){
    // debugger;
    return this._http.get(this._getURI)
    .map((response : Response) => response.json());
  }

  addDataInDB(poData : poUiStructure){
   var header = new Headers({ 'content-type' : 'application/JSON' });
   var options = new RequestOptions({ headers : header });
   console.log("Requested Data\n");
   debugger;
    console.log(this._getCreateURI);
   return this._http.post(this._getCreateURI, JSON.stringify(poData), options)
   .map((response : Response) => response.json());   

  }
}
