import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerItem  } from '../models/serveritem';

@Component({
  selector: 'app-servers',
  // Templates should be used when html gets over 3 lines or so
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // adding a css section for ngClass to reference to, in a specified scenerio
  styles: []
})
export class ServersComponent implements OnInit {
  items: ServerItem[] = [];
  constructor() {
   }

  ngOnInit() {
  }

  onClick(serverData: {name: string, content: string, type: string}) {
    this.items.push(
      new ServerItem(
        serverData.name,
        serverData.content,
        serverData.type
        ));
  }
}

