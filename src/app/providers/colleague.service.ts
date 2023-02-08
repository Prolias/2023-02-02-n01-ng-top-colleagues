import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  private _URL: string = "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2";

  colleagues: Colleague[] = [
    {
      pseudo: "Prolias",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Prolias",
      score: 0
    },
    {
      pseudo: "TavTav",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=TavTav",
      score: 250
    },
    {
      pseudo: "Carbonito",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito",
      score: 750
    },
    {
      pseudo: "Carbonito2",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito2",
      score: -500
    },
    {
      pseudo: "Carbonito3",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito3",
      score: 250
    },
    {
      pseudo: "Carbonito4",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito4",
      score: 1000
    }
  ]

  constructor(private http: HttpClient) { }

  getAllColleagues(): Colleague[] {
    return this.colleagues;
  }

  getAllColleagueFromApi(): Observable<Colleague[]> {
    return this.http.get<Colleague[]>(`${this._URL}/colleagues`)
  }

  postColleague(colleague: Colleague): Observable<Colleague> {
    return this.http.post<Colleague>(`${this._URL}/colleagues`, colleague);
  }
}
