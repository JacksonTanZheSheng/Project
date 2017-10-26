import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChangeTab() {
    $('.menu .item').tab();
  }
}
