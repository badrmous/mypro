import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonneNewComponent} from "./views/Gestion Personne/personne-new/personne-new.component";
import {PersonneListComponent} from "./views/Gestion Personne/personne-list/personne-list.component";

const routes: Routes = [
  {
    path : '',
    redirectTo : 'personne/liste',
    pathMatch :"full"
  },
  {
    path : '',
    children : [
      {
        path : 'personne/liste',
        component : PersonneListComponent
      },
      {
        path : 'personne/new',
        component : PersonneNewComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
