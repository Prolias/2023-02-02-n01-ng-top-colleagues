import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = []
  constructor() { }

  getAllVotes(): Vote[] {
    return this.votes;
  }
}
