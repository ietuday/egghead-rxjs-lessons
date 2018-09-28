import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { DoubleClickStreamComponent } from './double-click-stream/double-click-stream.component';
import { WhyRxjsComponent } from './why-rxjs/why-rxjs.component';
import { SuggestionBoxComponent } from './suggestion-box/suggestion-box.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DoubleClickStreamComponent,
    WhyRxjsComponent,
    SuggestionBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
