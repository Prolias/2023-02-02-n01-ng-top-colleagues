import {Component, EventEmitter, Input, Output} from '@angular/core';
import { LikeHate} from "../../../models/like-hate";
import {Vote} from "../../../models/vote";

@Component({
  selector: 'tc-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {
  @Input() vote!: Vote;

  @Output() deleted = new EventEmitter();

  LikeHate = LikeHate;

  deleteFromHistory() {
    this.deleted.emit(this.vote);
  }
}
