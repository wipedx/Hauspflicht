import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHouseholdComponent } from './manage-household.component';

describe('ManageHouseholdComponent', () => {
  let component: ManageHouseholdComponent;
  let fixture: ComponentFixture<ManageHouseholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageHouseholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
