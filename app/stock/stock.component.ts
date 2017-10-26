import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChangeTab() {
    $('.menu .item').tab();
  }
}
