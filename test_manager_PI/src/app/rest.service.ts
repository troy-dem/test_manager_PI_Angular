import { Injectable } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { DatePipe, Time } from '@angular/common';

export interface TestEvent{
  dateTime: string,
  completionTime: string,
  successRate: number
}

export interface TestFormData{
  date: string,
  time: string,
  completionTime: string,
  successRate: number
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  getTestEvents() : Observable<TestEvent[]>{
    return this.http.get<TestEvent[]>("http://localhost:3000/tests")
  }

  create(test: TestEvent): Observable<TestEvent>{
    console.log(test)
    return this.http.post<TestEvent>("http://localhost:3000/test",test)
  }

  put(test: TestEvent): Observable<TestEvent>{
    console.log(test)
    return this.http.post<TestEvent>("http://localhost:3000/test",test)
  }

  search(test: string): Observable<TestEvent>{
    return this.http.post<TestEvent>("http://localhost:3000/test",test)
  }

  delete(test: TestEvent): Observable<TestEvent>{
    console.log(test)
    console.log("delete")
    return this.http.delete<TestEvent>("http://localhost:3000/test",{body:test})
  }
  
}
