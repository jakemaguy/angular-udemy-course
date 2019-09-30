import { Component, OnInit } from '@angular/core';
import { ServerItem } from '../models/serveritem';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  servername: string;
  servercontent: string;


  constructor() { }

  ngOnInit() {
  }
  onClick(servername: string, servercontent: string, typestr: string) {
    //
    //console.log(`${servername} ${servercontent}`);
    //items.push(
    // / {type: typestr, name: servername, content: servercontent}
    //);
  }

}
