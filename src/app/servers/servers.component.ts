import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'testServer';
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  servers = ['testServer', 'testServer 2'];

  constructor() { 
    setTimeout(()=>{
          this.allowNewServer = true;
        }, 2000); 
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
      this.serverCreationStatus = "Server was created ! And the server name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
      //console.log(event)
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
