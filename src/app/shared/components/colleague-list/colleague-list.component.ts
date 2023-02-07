import {Component} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagues: Colleague[] = [];

  constructor(private colleagueSrv: ColleagueService) {
    this.refreshList();
  }

  refreshList() {
    this.colleagueSrv.getAllColleagueFromApi()
      .subscribe(listColleague => this.colleagues = listColleague);
  }
}
