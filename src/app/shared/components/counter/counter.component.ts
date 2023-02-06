import { Component } from '@angular/core';
import {VoteService} from "../../../providers/vote.service";
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  like: number = 0;
  hate: number = 0;

  constructor(private voteSrv: VoteService) {
    voteSrv.observableLikeHate()
      .subscribe(data => {
        if (data === LikeHate.LIKE) this.like++;
        if (data === LikeHate.HATE) this.hate++;
      })
  }

}
