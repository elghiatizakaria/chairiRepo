import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsUserComponent } from './credentials-user.component';

describe('CredentialsUserComponent', () => {
  let component: CredentialsUserComponent;
  let fixture: ComponentFixture<CredentialsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CredentialsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
