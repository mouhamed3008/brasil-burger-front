import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCmdComponent } from './liste-cmd.component';

describe('ListeCmdComponent', () => {
  let component: ListeCmdComponent;
  let fixture: ComponentFixture<ListeCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
