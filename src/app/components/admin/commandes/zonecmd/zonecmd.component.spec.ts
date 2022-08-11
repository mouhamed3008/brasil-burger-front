import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonecmdComponent } from './zonecmd.component';

describe('ZonecmdComponent', () => {
  let component: ZonecmdComponent;
  let fixture: ComponentFixture<ZonecmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonecmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonecmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
