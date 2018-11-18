import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowseProjectsComponent } from './browse-projects.component';

const routes: Routes = [
  {path: 'miro', component: BrowseProjectsComponent},
  {path: '', redirectTo: 'miro', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrowseProjectsRoutingModule {
}
