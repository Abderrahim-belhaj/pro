import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilavocatComponent } from './profilavocat.component';

describe('ProfilavocatComponent', () => {
  let component: ProfilavocatComponent;
  let fixture: ComponentFixture<ProfilavocatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilavocatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilavocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
