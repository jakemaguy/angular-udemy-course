import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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

  // argument is selector of html element/reference
  @ViewChild('serverInputContent', {static: true}) serverContentInput: ElementRef;

  items = [];

  constructor() { }

  ngOnInit() {
  }

  onRefClick(nameInput: HTMLInputElement) {
    // Allows us to get html element itself
    console.log(nameInput);
    console.log(nameInput.value); // print text of element
  }


  onClick(servername: string, servercontent: string, typestr: string) {
    this.serverCreated.emit({
      name: servername,
      content: servercontent,
      type: typestr
    });
  }
}
