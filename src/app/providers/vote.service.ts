import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {Observable, Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = []

  private likeHate = new Subject<LikeHate>();

  constructor(private http: HttpClient) { }

  getAllVotes(): Vote[] {
    return this.votes;
  }

  getAllVoteFromApi(): Observable<Vote[]> {
    return this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes')
  }

  observableLikeHate() {
    return this.likeHate.asObservable();
  }

  notifLikeHate(data: LikeHate){
    this.likeHate.next(data);
  }

  postVote(vote: Vote): Observable<any> {
    return this.http.post<any>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes', {like_hate: vote.likeHate, pseudo: vote.colleague.pseudo});
  }
}
