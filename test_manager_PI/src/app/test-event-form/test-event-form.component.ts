import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { concat } from 'rxjs';
import { RestService, TestEvent, TestFormData } from '../rest.service';

@Component({
  selector: 'app-test-event-form',
  templateUrl: './test-event-form.component.html',
  styleUrls: ['./test-event-form.component.css']
})
export class TestEventFormComponent implements OnInit {

  constructor(private api: RestService) { }
  testForm = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
    completionTime: new FormControl(''),
    successRate: new FormControl(''),
  });
  
  test: TestEvent = {dateTime: Date.now().toLocaleString(), completionTime: Date.now().toLocaleString(), successRate: 0};
  ngOnInit(): void {
    
  }

  onSubmit(data: TestEvent) {
    console.log("submit successful")
  }

 onClickSave(data: TestFormData) {
  var dateparts = data.date.split("/")
  var timeparts = data.time.split(":")
  this.test.dateTime = new Date(2000+(+dateparts[0]),+dateparts[1]-1,+dateparts[2],+timeparts[0],+timeparts[1]).toUTCString()
  this.test.completionTime = "00:"+data.completionTime+":00"
  this.test.successRate = data.successRate
  this.api.create(this.test).subscribe(data => {
      this.test = data;  
  })
 }

 onClickModdify(data: TestEvent) {
  this.api.put(data).subscribe(data => {
      this.test = data;  
  })
 }

 onClickDelete(data: TestEvent) {
  this.api.delete(data).subscribe(data => {
      this.test = data;  
  })
 }
 onClickSearch(criterion: string){
  this.api.search(criterion).subscribe(data => {
    if (data !=null){
      this.testForm.patchValue(data);
    }
    else{
      this.testForm.reset()
    }
  })
 }

}
