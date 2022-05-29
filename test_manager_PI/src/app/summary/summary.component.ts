import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  level: number = 0

  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getLevel()
    .subscribe(data => {
      console.log(data)
      this.level = data;  
    })
  }


}
