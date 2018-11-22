///<reference path="../../../../node_modules/@types/jasmine/index.d.ts"/>
import { AgencyListItemComponent } from './agency-list-item.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
/*
@Component({
  selector: `host-component`,
  template: `<agency-list-item [agency]="agency"></agency-list-item>`
})
class AgencyListItemComponentMock {
  agency = {id: '11111', name: 'Tuke'};
}

describe('AgencyListItemComponent', () => {
 let component: AgencyListItemComponentMock;
 let fixture: ComponentFixture<AgencyListItemComponentMock>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ AgencyListItemComponentMock ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyListItemComponentMock);
    component.agency = {id: '11111', name: 'Tuke'};
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /!*it('should inject', () => {
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
  });*!/
});*/


describe('AgencyListItemComponent', () => {
  let testHostComponent: AgencyListItemComponentFake;
  let testHostFixture: ComponentFixture<AgencyListItemComponentFake>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AgencyListItemComponent, AgencyListItemComponentFake]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(AgencyListItemComponentFake);
    testHostComponent = testHostFixture.componentInstance;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should inject', () => {
    testHostComponent.componentUnderTestComponent.agency = {id: '11111', name: 'Janko'};
    testHostFixture.detectChanges();
    expect(testHostComponent.componentUnderTestComponent.getIcon()
      .includes(testHostComponent.componentUnderTestComponent.agency.id));
  });

  it('should show TEST INPUT', () => {
    testHostComponent.componentUnderTestComponent.agency = {id: 'NASA', name: 'Tuke'};
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('h3').innerText).toEqual('Tuke');
  });

  it('should show DIFFERENT TEST INPUT', () => {
    testHostComponent.componentUnderTestComponent.agency = {id: 'NASA', name: 'Janko'};
    testHostFixture.detectChanges();
    expect(testHostFixture.nativeElement.querySelector('h3').innerText).toEqual('Janko');
  });

  @Component({
    selector: `component-fake`,
    template: `
      <agency-list-item></agency-list-item>`
  })
  class AgencyListItemComponentFake {
    @ViewChild(AgencyListItemComponent)
    public componentUnderTestComponent: AgencyListItemComponent;
  }
});
