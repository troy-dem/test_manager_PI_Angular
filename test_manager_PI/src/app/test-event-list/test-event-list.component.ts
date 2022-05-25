import { Component, OnInit } from '@angular/core';
import { RestService, TestEvent } from '../rest.service';

@Component({
  selector: 'app-test-event-list',
  templateUrl: './test-event-list.component.html',
  styleUrls: ['./test-event-list.component.css']
})
export class TestEventListComponent implements OnInit {

  tests: TestEvent[] = [];
  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getTestEvents()
    .subscribe(data => {
      this.tests = data;  
    })
  }

}
