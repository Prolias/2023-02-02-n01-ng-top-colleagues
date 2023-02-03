import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  @Input() colleagues: Colleague[] = [];

  @Output() vote = new EventEmitter<Vote>();


  traiterVote(vote: Vote) {
    this.vote.emit(vote);
  }
}
