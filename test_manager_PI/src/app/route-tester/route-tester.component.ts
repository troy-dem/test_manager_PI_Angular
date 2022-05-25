import { Component, OnInit } from '@angular/core';
import { RestService, TestEvent } from '../rest.service';

@Component({
  selector: 'app-route-tester',
  templateUrl: './route-tester.component.html',
  styleUrls: ['./route-tester.component.css']
})
export class RouteTesterComponent implements OnInit {

  tests: TestEvent[] = [];
  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getTestEvents()
    .subscribe(data => {
      this.tests = data;  
    })
  }

}
