import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprodroitComponent } from './gestionprodroit.component';

describe('GestionprodroitComponent', () => {
  let component: GestionprodroitComponent;
  let fixture: ComponentFixture<GestionprodroitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionprodroitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionprodroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
