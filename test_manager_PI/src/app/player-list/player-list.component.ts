import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player, RestService } from '../rest.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  @Output() emit_player = new EventEmitter<Player> ();
  player_id: number = 0;

  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getPlayers()
    .subscribe(data => {
      this.players = data;  
    })
  }

  onClickSelect(player: Player){
    this.emit_player.emit(player)
  }

  onClickSearch(criterionType:string, criterion: string){
    const criteria: {[index: string]:any} = {}
    criteria[criterionType] = criterion
    this.api.searchPlayer(criteria).subscribe(data => {
      this.players = data;
    })
   }

}
