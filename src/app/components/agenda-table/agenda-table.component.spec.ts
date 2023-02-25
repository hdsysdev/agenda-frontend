import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaTableComponent } from './agenda-table.component';

describe('AgendaTableComponent', () => {
  let component: AgendaTableComponent;
  let fixture: ComponentFixture<AgendaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
