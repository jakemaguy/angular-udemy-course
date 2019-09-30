import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerItem } from '../models/serveritem';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Need to add decorator to make this accessable to outside functions
  @Output('serverclick') serverCreated = new EventEmitter<{
    name: string;
    content: string;
    type: string;
  }>();

  servername: string;
  servercontent: string;

  items = [];

  constructor() { }

  ngOnInit() {
  }

  onClick(servername: string, servercontent: string, typestr: string) {
    this.serverCreated.emit({
      name: servername,
      content: servercontent,
      type: typestr
    });
  }
}
