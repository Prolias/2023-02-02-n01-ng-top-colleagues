import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { VotingComponent } from './components/voting/voting.component';
import { CounterComponent } from './components/counter/counter.component';
import { CreateColleagueFormsComponent } from './components/create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";



@NgModule({
    declarations: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        ScorePipe,
        VotingHistoryComponent,
        VotingComponent,
        CounterComponent,
        CreateColleagueFormsComponent
    ],
    exports: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        VotingHistoryComponent,
        CounterComponent,
        CreateColleagueFormsComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ]
})
export class SharedModule { }
