import {Component} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  sebastien: Colleague = {
    pseudo: "Prolias",
    photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Prolias",
    score: 100
  }

  modifyScore(likehate: LikeHate) {
    if (likehate === LikeHate.LIKE) this.sebastien.score++;
    if (likehate === LikeHate.HATE) this.sebastien.score--;
  }
}
