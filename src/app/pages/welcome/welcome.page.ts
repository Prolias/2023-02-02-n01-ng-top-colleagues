import {Component} from '@angular/core';
import {Vote} from "../../models/vote";
import {Colleague} from "../../models/colleague";

@Component({
  selector: 'tc-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {

  colleagues: Colleague[] = [
    {
      pseudo: "Prolias",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Prolias",
      score: 0
    },
    {
      pseudo: "TavTav",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=TavTav",
      score: 0
    },
    {
      pseudo: "Carbonito",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito",
      score: 500
    },
    {
      pseudo: "Carbonito2",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito2",
      score: 500
    },
    {
      pseudo: "Carbonito3",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito3",
      score: 500
    },
    {
      pseudo: "Carbonito4",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito4",
      score: 500
    }
  ]
  votes: Vote[] = []

  traiterVote(vote: Vote) {
    this.votes.push(vote);
  }
}
