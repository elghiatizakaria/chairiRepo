import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributsRolesComponent } from './attributs-roles.component';

describe('AttributsRolesComponent', () => {
  let component: AttributsRolesComponent;
  let fixture: ComponentFixture<AttributsRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributsRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
