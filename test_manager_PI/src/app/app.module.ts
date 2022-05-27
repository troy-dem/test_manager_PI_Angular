import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestEventFormComponent } from './test-event-form/test-event-form.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { HttpClientModule } from '@angular/common/http';
import { TestEventListComponent } from './test-event-list/test-event-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestEventFormComponent,
    RouteTesterComponent,
    TestEventListComponent,
    PlayerListComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
