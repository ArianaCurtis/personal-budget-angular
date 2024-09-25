import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3JSComponent } from './d3-js.component';

describe('D3JSComponent', () => {
  let component: D3JSComponent;
  let fixture: ComponentFixture<D3JSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [D3JSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(D3JSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
