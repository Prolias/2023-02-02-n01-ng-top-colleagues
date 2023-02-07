import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

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

  emitLike(likehate: LikeHate) {
    this.scoreChange.emit(likehate);
  }
}
