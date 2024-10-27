import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgEditButtonComponent } from './ag-edit-button.component';

describe('AgEditButtonComponent', () => {
  let component: AgEditButtonComponent;
  let fixture: ComponentFixture<AgEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
