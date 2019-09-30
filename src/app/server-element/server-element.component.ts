import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // creating custom property for child component to access
  // this is only accessable from this class
  // by default all properties of components are only accessable inside that component

  // adding decorator to make accessable to parent classes
  @Input() item: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
