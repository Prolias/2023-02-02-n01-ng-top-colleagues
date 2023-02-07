import {Component } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from "../../../models/vote";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  votes: Vote[] = [];
  LikeHate = LikeHate;

  constructor(private voteSrv: VoteService) {
    this.refreshHistory();
    voteSrv.observableLikeHate()
      .subscribe(() => this.refreshHistory());
  }

  refreshHistory() {
    this.voteSrv.getAllVoteFromApi()
      .subscribe(votes => this.votes = votes);
  }

  deleteFromList(vote: Vote) {
    this.votes.splice(this.votes.indexOf(vote), 1);
  }
}
