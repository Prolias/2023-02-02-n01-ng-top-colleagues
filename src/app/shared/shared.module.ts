import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';



@NgModule({
    declarations: [
        LikeHateComponent
    ],
    exports: [
        LikeHateComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
