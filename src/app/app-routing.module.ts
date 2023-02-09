import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {WelcomePage} from "./pages/welcome/welcome.page";
import {CreateColleaguePage} from "./pages/create-colleague/create-colleague.page";

const routes: Routes = [
  {path: 'colleagues', component: WelcomePage},
  {path: 'form-template', component: CreateColleaguePage},
  {path: '', pathMatch: 'full', redirectTo: '/colleagues'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
