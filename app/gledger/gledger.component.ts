import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gledger',
  templateUrl: './gledger.component.html',
  styleUrls: ['./gledger.component.css']
})
export class GledgerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChangeTab() {
    $('.menu .item').tab();
  }
}
