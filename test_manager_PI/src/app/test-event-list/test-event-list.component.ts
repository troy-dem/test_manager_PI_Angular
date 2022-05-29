import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestService, TestEvent } from '../rest.service';

@Component({
  selector: 'app-test-event-list',
  templateUrl: './test-event-list.component.html',
  styleUrls: ['./test-event-list.component.css']
})
export class TestEventListComponent implements OnInit {

  tests: TestEvent[] = [];
  @Output() emit_test = new EventEmitter<TestEvent> ();
  test_id: number = 0;


  constructor(private api: RestService) { }
  ngOnInit(){
    this.api.getTestEvents()
    .subscribe(data => {
      this.tests = data;  
    })
  }
  onClickSearch(criterionType:string, criterion: string){
    switch (criterionType) {
      case "dateTime":
        if (criterion){
          var dateparts = criterion.split("/")
          criterion = new Date(2000+(+dateparts[2]),+dateparts[1]-1,+dateparts[0]).toUTCString()
          console.log("criterion val: "+criterion)
        }
        break;
      case "completionTime":
        if (criterion){
          criterion = "00:"+criterion+":00"
        }
        break;
      default:
        console.log(criterionType)
    }
    const criteria: {[index: string]:any} = {}
    criteria[criterionType] = criterion
    this.api.searchTest(criteria).subscribe(data => {
      this.tests = data;
    })
   }

   onClickSelect(test: TestEvent){
    this.emit_test.emit(test)
  }

}
