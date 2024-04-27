import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInRolesComponent } from './user-in-roles.component';

describe('UserInRolesComponent', () => {
  let component: UserInRolesComponent;
  let fixture: ComponentFixture<UserInRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
