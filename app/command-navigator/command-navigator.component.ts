import { Component, OnInit } from '@angular/core';

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
}
