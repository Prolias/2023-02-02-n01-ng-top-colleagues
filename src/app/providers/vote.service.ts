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

  observableLikeHate() {
    return this.likeHate.asObservable();
  }

  notifLikeHate(data: LikeHate){
    this.likeHate.next(data);
  }

  postVote(vote: Vote): Observable<any> {
    return this.http.post<any>('https://dev.cleverapps.io/api/v2/votes', {like_hate: vote.likeHate, pseudo: vote.colleague.pseudo});
  }
}
