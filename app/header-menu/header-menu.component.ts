import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    $('.ui.sidebar').sidebar('toggle');
  }
}
