import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaincodesComponent } from './chaincodes.component';

describe('ChaincodesComponent', () => {
  let component: ChaincodesComponent;
  let fixture: ComponentFixture<ChaincodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaincodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaincodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
