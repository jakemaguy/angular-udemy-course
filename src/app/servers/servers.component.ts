import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Templates should be used when html gets over 3 lines or so
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offline';
  constructor() {
    // simulates server going down and back up randomly
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
