import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from  '@angular/common/http';

export interface TestEvent{
  test_id: number,
  dateTime: string,
  completionTime: string,
  successRate: number
}

export interface Player{
  player_id: number,
  firstname: string,
  surname: string,
  age: number,
  education: string
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
    return this.http.post<TestEvent[]>("http://localhost:3000/tests",{})
  }

  createTest(test: TestEvent): Observable<TestEvent>{
    console.log(test)
    return this.http.post<TestEvent>("http://localhost:3000/test",test)
  }

  putTest(test: TestEvent): Observable<TestEvent>{
    return this.http.put<TestEvent>("http://localhost:3000/test",test)
  }

  searchTest(criterias: Object) : Observable<TestEvent[]>{
    return this.http.post<TestEvent[]>("http://localhost:3000/tests",criterias)
  }

  deleteTest(test: TestEvent): Observable<TestEvent>{
    return this.http.delete<TestEvent>("http://localhost:3000/test",{body:test})
  }


  getPlayers() : Observable<Player[]>{
    return this.http.post<Player[]>("http://localhost:3000/player/list",{})
  }

  createPlayer(player: Player): Observable<Player>{
    console.log(player)
    return this.http.post<Player>("http://localhost:3000/player",player)
  }

  putPlayer(player: Player): Observable<Player>{
    return this.http.put<Player>("http://localhost:3000/player",player)
  }

  searchPlayer(criterias: Object) : Observable<Player[]>{
    return this.http.post<Player[]>("http://localhost:3000/player/list",criterias)
  }

  deletePlayer(player: Player): Observable<Player>{
    return this.http.delete<Player>("http://localhost:3000/player",{body:player})
  }
  
}
