import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChaincodePopupComponent } from './add-chaincode-popup.component';

describe('AddChaincodePopupComponent', () => {
  let component: AddChaincodePopupComponent;
  let fixture: ComponentFixture<AddChaincodePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChaincodePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChaincodePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
