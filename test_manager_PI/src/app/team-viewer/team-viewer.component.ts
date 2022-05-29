import { Component, OnInit } from '@angular/core';
import { Player, RestService, TestEvent } from '../rest.service';

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrls: ['./team-viewer.component.css']
})
export class TeamViewerComponent implements OnInit {

  constructor(private api: RestService) { }
  test_id: number = 0
  player_id: number = 0
  teamMembers: Player[] = []

  ngOnInit(): void {
  }

  chooseTest($event: TestEvent) {
    this.test_id = $event.test_id
    console.log("test_id: "+this.test_id)
  }

  choosePlayer($event: Player) {
    this.player_id = $event.player_id
    console.log("player_id: "+this.player_id)
  }

  onClickViewTeam(){
    this.api.viewTeam(this.test_id).subscribe(data => {
      this.teamMembers = data[0].players;
    })
  }

  onClickSetTeam(){
    var team = new Object({test_id: this.test_id, player_id: this.player_id})
    this.api.setTeam(team).subscribe(data => {
      console.log("member added to team")
    })
  }

  onClickRemoveTeam(){
    var team = new Object({player_id: this.player_id})
    this.api.removeTeam(team).subscribe(data => {
      console.log("member deleted from team")
    })
  }

}
