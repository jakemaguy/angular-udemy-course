import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

// NGModule declarations for angular app
@NgModule({
  // Custom Components go into the Declarations section
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  name: string;
}
