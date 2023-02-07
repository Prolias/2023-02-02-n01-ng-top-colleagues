import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague;

  constructor(private voteSrv: VoteService) {
  }

  modifyScore(likehate: LikeHate) {
    this.voteSrv.postVote({
      likeHate: likehate,
      colleague: {...this.colleague}
    })
      .subscribe(colleague => {
        this.colleague.score = colleague.score;
        this.voteSrv.notifLikeHate(likehate);
      });
  }
}
