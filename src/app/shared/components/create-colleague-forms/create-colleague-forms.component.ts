import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
  colleagueToCreate: Partial<Colleague> = {}

  valider() {
    console.log(this.colleagueToCreate)
  }
}
