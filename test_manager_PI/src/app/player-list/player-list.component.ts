import { Component, OnInit } from '@angular/core';
import { Player, RestService } from '../rest.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getPlayers()
    .subscribe(data => {
      this.players = data;  
    })
  }

}
