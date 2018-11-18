///<reference path="browse-projects-routing.module.ts"/>
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseProjectsComponent } from './browse-projects.component';
import { StateService } from '../../services/state';
import { ClientService } from '../../services/client';
import { BrowseProjectsRoutingModule } from './browse-projects-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    BrowseProjectsComponent,
  ],
  imports: [
    CommonModule, BrowserModule, FormsModule,
    BrowseProjectsRoutingModule, SharedModule
  ],
  providers: [
    StateService,
    ClientService,
  ],   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class BrowseProjectsModule {
}
