import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';

// The FormsModule is required for Two-Way Binding
import { FormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';

// NGModule declarations for angular app
@NgModule({
  // Custom Components go into the Declarations section
  declarations: [
    AppComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: string;
}
