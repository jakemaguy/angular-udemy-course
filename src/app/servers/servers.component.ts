import { Component, OnInit } from '@angular/core';
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
  constructor() {
   }

  ngOnInit() {
  }
}

