import { Component } from '@angular/core';
import { ServerItem } from './models/serveritem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [];
}
