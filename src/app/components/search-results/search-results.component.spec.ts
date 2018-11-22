import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ClientService } from '../../services/client';
import { PluralizePipe } from '../../pipes/pluralize';
import { SearchResultsComponent } from './search-results.component';
import { StateService } from '../../services/state';
import { MobileService } from '../../services/mobile';

class MockRouter {
  url: string;
  constructor() {
    this.url = '/search?q=test';
  }

  navigateByUrl() {
    return true;
  }
}

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.queryParams = Observable.of({ q: 'test '});
  }
}

describe('SearchResultsComponent', () => {
  let fixture: ComponentFixture<SearchResultsComponent>;
  let component: SearchResultsComponent;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpModule, FormsModule
      ],
      declarations: [
        PluralizePipe,
        SearchResultsComponent,
      ],
      providers: [
        ClientService,
        StateService,
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    });

    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
  });

  describe('component logic', () => {
    it('should have defined SearchResultsComponent instance', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });
  });

  describe('component template', () => {
    it('should have an element with search-results-content as a class', () => {
      fixture.detectChanges();
      let searchResultsContainer = fixture.nativeElement.querySelector('.search-results-content');

      expect(searchResultsContainer).toBeDefined();
    });
  });
});
