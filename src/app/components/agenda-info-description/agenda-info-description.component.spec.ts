import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaInfoDescriptionComponent } from './agenda-info-description.component';

describe('AgendaInfoDescriptionComponent', () => {
  let component: AgendaInfoDescriptionComponent;
  let fixture: ComponentFixture<AgendaInfoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaInfoDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaInfoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
