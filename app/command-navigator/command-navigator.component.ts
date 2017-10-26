import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-command-navigator',
  templateUrl: './command-navigator.component.html',
  styleUrls: ['./command-navigator.component.css']
})
export class CommandNavigatorComponent implements OnInit {

  tabColor: string = 'black';

  constructor() { }

  ngOnInit() {
  }

  onChangeTab() {
    $('.menu .item').tab();
  }

  getColor() {
		return this.tabColor === 'black' ? 'white' : 'black';
	}
}
