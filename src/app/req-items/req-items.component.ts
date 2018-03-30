import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'req-items',
  templateUrl: './req-items.component.html',
  styleUrls: ['./req-items.component.css'],
  inputs : ['lineItems', 'poData']
})
export class ReqItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
