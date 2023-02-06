import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Vote } from 'src/app/models/vote';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague;
  @Output() vote = new EventEmitter<Vote>();

  modifyScore(likehate: LikeHate) {
    if (likehate === LikeHate.LIKE) this.colleague.score += 50;
    if (likehate === LikeHate.HATE) this.colleague.score -= 50;
    this.vote.emit({
      colleague: {...this.colleague},
      likeHate: likehate
    })
  }
}
