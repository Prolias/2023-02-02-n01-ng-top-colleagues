import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { VotingHistoryComponent } from './components/voting-history/voting-history.component';
import { VotingComponent } from './components/voting/voting.component';



@NgModule({
    declarations: [
        LikeHateComponent,
        ColleagueComponent,
        ColleagueListComponent,
        ScorePipe,
        VotingHistoryComponent,
        VotingComponent
    ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent,
    VotingHistoryComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
