import {Component} from '@angular/core';
import {Vote} from "../../models/vote";

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  votes: Vote[] = []

  traiterVote(vote: Vote) {
    this.votes.push(vote);
  }
}
