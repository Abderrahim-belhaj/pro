import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererrendezvousComponent } from './gererrendezvous.component';

describe('GererrendezvousComponent', () => {
  let component: GererrendezvousComponent;
  let fixture: ComponentFixture<GererrendezvousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GererrendezvousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
