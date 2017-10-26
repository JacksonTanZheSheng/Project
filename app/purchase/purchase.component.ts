import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChangeTab() {
    $('.menu .item').tab();
  }
}
