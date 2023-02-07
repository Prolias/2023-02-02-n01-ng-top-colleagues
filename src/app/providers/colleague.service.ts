import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

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
    return this.http.get<Colleague[]>('https://dev.cleverapps.io/api/v2/colleagues')
  }
}
