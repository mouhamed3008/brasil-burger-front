import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonItemComponent } from './livraison-item.component';

describe('LivraisonItemComponent', () => {
  let component: LivraisonItemComponent;
  let fixture: ComponentFixture<LivraisonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivraisonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
