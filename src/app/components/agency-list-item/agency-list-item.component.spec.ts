///<reference path="../../../../node_modules/@types/jasmine/index.d.ts"/>
import { AgencyListItemComponent } from './agency-list-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'component-mock',
  template: '<agency-list-item [agency]="agency"></agency-list-item>'
})
class AutocompleteComponentWrapper {
  agency = {id: '111', name: 'tuke'};
}

describe('AgencyListItemComponent', () => {
 let component: AgencyListItemComponent;
 let fixture: ComponentFixture<AutocompleteComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyListItemComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyListItemComponent);
    component.agency = {id: '1', name: 'Janko Hrasko'};
 //   component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject', () => {
    expect(component.agency).toBeDefined().then(() => {
      expect(component.getIcon().includes(component.agency.id));
    });
  });

  it('should have a image element and h3', () => {
    fixture.detectChanges();
    let image = fixture.nativeElement.querySelector('img');
    let h3 = fixture.nativeElement.querySelector('h3');
    let srcImg = image.src;

    expect(image).toBeDefined();
    expect(srcImg).toBeDefined();
    expect(h3).toBe(component.agency.name);
  });
});
