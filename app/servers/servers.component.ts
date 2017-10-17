import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  btn = 'ui loading primary button';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
      this.btn = 'ui primary button';
    }, 1000);
  }

  ngOnInit() {
  }

  onCreateServer()  {
    setTimeout(() => {
      this.allowNewServer = true;
      this.btn = 'ui primary button';
      this.serverCreated = true;
      this.serverCreationStatus = 'This server has been created: ' + this.serverName;
      this.servers.push(this.serverName);
    }, 500);
  }

  onTempLoading() {
    this.allowNewServer = false;
    this.btn = 'ui loading primary button';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }
}
