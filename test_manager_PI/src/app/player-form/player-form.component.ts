import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Player, RestService } from '../rest.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  players: Player[] = []
  constructor(private api: RestService) { }
  playerForm = new FormGroup({
    firstname: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
  });

  player: Player = {player_id: 0, firstname: "", surname: "", age: 0, education: ""}

  ngOnInit(): void {
  }

  choosePlayer($event: Player) {
    this.player.player_id = $event.player_id
    this.playerForm.patchValue($event);
  }

  onClickSave(data: Player){
    this.playerForm.reset()
    this.ProcessFormData(data)
    this.api.createPlayer(this.player).subscribe(data => {
      console.log("put return : "+data)  
    })
  }

  onClickModdify(data: Player) {
    this.playerForm.reset()
    this.ProcessFormData(data)
    this.api.putPlayer(this.player).subscribe(data => {
      console.log("put return : "+data)  
    })
   }

   onClickDelete(data: Player) {
    this.playerForm.reset()
    this.ProcessFormData(data)
    this.api.deletePlayer(this.player).subscribe(data => {
        console.log("delete return : "+data)  
    })
   }

   ProcessFormData(data: Player){
     this.player.firstname = data.firstname
     this.player.surname = data.surname
     this.player.age = data.age
     this.player.education = data.education
   }

}
