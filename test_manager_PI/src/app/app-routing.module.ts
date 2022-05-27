import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestEventFormComponent } from './test-event-form/test-event-form.component';
import { RouteTesterComponent } from './route-tester/route-tester.component';
import { TestEventListComponent } from './test-event-list/test-event-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';

const routes: Routes = [
  { path: 'test', component: TestEventFormComponent },
  { path: 'tests', component: TestEventListComponent },
  { path: 'player/list', component: PlayerListComponent },
  { path: 'player', component: PlayerFormComponent },
  { path: '', component: RouteTesterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
