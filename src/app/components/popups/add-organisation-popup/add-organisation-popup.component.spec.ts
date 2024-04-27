import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganisationPopupComponent } from './add-organisation-popup.component';

describe('AddOrganisationPopupComponent', () => {
  let component: AddOrganisationPopupComponent;
  let fixture: ComponentFixture<AddOrganisationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrganisationPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOrganisationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
