import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {Subject} from "rxjs";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = []

  private likeHate = new Subject<LikeHate>();

  constructor() { }

  getAllVotes(): Vote[] {
    return this.votes;
  }

  observableLikeHate() {
    return this.likeHate.asObservable();
  }

  notifLikeHate(data: LikeHate){
    this.likeHate.next(data);
  }
}
