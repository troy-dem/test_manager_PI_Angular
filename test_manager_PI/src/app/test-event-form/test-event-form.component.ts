import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { RestService, TestEvent, TestFormData } from '../rest.service';

@Component({
  selector: 'app-test-event-form',
  templateUrl: './test-event-form.component.html',
  styleUrls: ['./test-event-form.component.css']
})
export class TestEventFormComponent implements OnInit {
  
  tests: TestEvent[] = []
  constructor(private api: RestService) { }
  testForm = new FormGroup({
    date: new FormControl(''),
    time: new FormControl(''),
    completionTime: new FormControl(''),
    successRate: new FormControl(''),
  });
  
  test: TestEvent = {test_id: 0,dateTime: Date.now().toLocaleString(), completionTime: Date.now().toLocaleString(), successRate: 0};
  ngOnInit(): void {
    
  }

  chooseTest($event: TestEvent) {
    this.test.test_id = $event.test_id
    var dateparts = $event.dateTime.split("T")[0].split("-").reverse()
     var year = dateparts[2].slice(2,4)
     var testdate =  dateparts.slice(0,2).join("/")+"/"+year
     var testtime = $event.dateTime.split("T")[1].split(".")[0].slice(0,5)
     const formData: TestFormData = {date: testdate, time:testtime, completionTime: $event.completionTime.slice(3,5), successRate: $event.successRate}
      this.testForm.patchValue(formData);
      console.log(this.test)
  }

 onClickSave(data: TestFormData) {
  this.testForm.reset()
  this.ConvertFormData(data)
  this.api.createTest(this.test).subscribe(data => {
      this.test = data;  
  })
 }

 onClickModdify(data: TestFormData) {
  this.testForm.reset()
  this.ConvertFormData(data)
  this.api.putTest(this.test).subscribe(data => {
    console.log("put return : "+data)  
  })
 }

 onClickDelete(data: TestFormData) {
  this.testForm.reset()
  this.ConvertFormData(data)
  this.api.deleteTest(this.test).subscribe(data => {
      console.log("delete return : "+data)  
  })
 }

ConvertFormData(data: TestFormData){
  var dateparts = data.date.split("/")
  var timeparts = data.time.split(":")
  this.test.dateTime = new Date(2000+(+dateparts[2]),+dateparts[1]-1,+dateparts[0],+timeparts[0],+timeparts[1]).toUTCString()
  this.test.completionTime = "00:"+data.completionTime+":00"
  this.test.successRate = data.successRate
  console.log(this.test)
}

}
