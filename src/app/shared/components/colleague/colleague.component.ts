import {Component, Input} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague;

  modifyScore(likehate: LikeHate) {
    if (likehate === LikeHate.LIKE) this.colleague.score += 1;
    if (likehate === LikeHate.HATE) this.colleague.score -= 1;
  }
}
