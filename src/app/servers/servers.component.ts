import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ServerItem  } from '../models/serveritem';

@Component({
  selector: 'app-servers',
  // Templates should be used when html gets over 3 lines or so
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // setting encapsulation to none
  // by default, angular provides encapsulation to CSS styles
  // only affecting invividual components
  // emulated is the default
  encapsulation: ViewEncapsulation.None
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

