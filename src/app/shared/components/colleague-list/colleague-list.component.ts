import {Component, EventEmitter, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {Vote} from "../../../models/vote";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [];

  @Output() vote = new EventEmitter<Vote>();

  constructor(private colleagueSrv: ColleagueService) {
    this.refreshList();
  }

  refreshList() {
    this.colleagueSrv.getAllColleagueFromApi()
      .subscribe(listColleague => this.colleagues = listColleague);
  }

  traiterVote(vote: Vote) {
    this.vote.emit(vote);
  }
}
