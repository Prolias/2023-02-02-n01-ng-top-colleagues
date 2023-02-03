import {Component, Input } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from "../../../models/vote";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  @Input() votes: Vote[] = [];
  LikeHate = LikeHate;

  deleteFromList(vote: Vote) {
    this.votes.splice(this.votes.indexOf(vote), 1);
  }
}
