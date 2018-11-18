import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PluralizePipe } from './pipes/pluralize';
import { RepoListComponent } from './components/repo-list';
import { ReposSearchComponent } from './components/repos-search';
import {
  AutocompleteComponent,
  AutocompleteResultComponent,
  ReposComponent,
  SearchInputComponent
} from './utils/app-components/app-components.util';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RepoListItemComponent } from './components/repo-list-item';
import { AgencyListItemComponent } from './components/agency-list-item';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from './pipes/truncate';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RepoListComponent,
    RepoListItemComponent,
    ReposSearchComponent,
    SearchInputComponent,
    AgencyListItemComponent,
    AutocompleteResultComponent,
    TruncatePipe,
    AutocompleteComponent,
    ReposComponent,
    PluralizePipe,
  ],
  imports: [
    CommonModule, BrowserModule, FormsModule,

    InfiniteScrollModule, NgxPaginationModule, RouterModule
  ],
  exports: [RepoListComponent,
    RepoListItemComponent,
    ReposSearchComponent,
    SearchInputComponent,
    AgencyListItemComponent,
    AutocompleteResultComponent,
    TruncatePipe,
    AutocompleteComponent,
    ReposComponent,
    InfiniteScrollModule,
    PluralizePipe],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule {

}
