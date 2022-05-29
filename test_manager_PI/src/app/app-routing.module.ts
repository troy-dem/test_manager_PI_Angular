import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestEventFormComponent } from './test-event-form/test-event-form.component';
import { SummaryComponent } from './summary/summary.component';
import { TestEventListComponent } from './test-event-list/test-event-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { TeamViewerComponent } from './team-viewer/team-viewer.component';

const routes: Routes = [
  { path: 'test/list', component: TestEventListComponent },
  { path: 'test', component: TestEventFormComponent },
  { path: 'player/list', component: PlayerListComponent },
  { path: 'player', component: PlayerFormComponent },
  { path: 'team', component: TeamViewerComponent },
  { path: '', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
