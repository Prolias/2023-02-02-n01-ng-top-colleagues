import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  LikeHate = LikeHate;

  @Input() likedMax: boolean = false;
  @Input() hatedMax: boolean = false;

  @Output() scoreChange: EventEmitter<LikeHate> = new EventEmitter<LikeHate>();

  constructor(private voteSrv: VoteService) {
  }

  emitLike(likehate: LikeHate) {
    this.scoreChange.emit(likehate);
    this.voteSrv.notifLikeHate(likehate);
  }
}
