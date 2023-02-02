import { Component } from '@angular/core';
import {Colleague} from "./models/colleague";

@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colleagues: Colleague[] = [
    {
      pseudo: "Prolias",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Prolias",
      score: 100
    },
    {
      pseudo: "TavTav",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=TavTav",
      score: 100
    },
    {
      pseudo: "Carbonito",
      photo: "https://api.dicebear.com/5.x/bottts-neutral/svg?seed=Carbonito",
      score: 500
    }
  ]
}
