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
  onClick(servername: string, servercontent: string, type: string) {
    console.log(`${servername} ${servercontent}`);
    this.items.push(
      new ServerItem(servername, servercontent, type)
    );
  }

}
