import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaViewerPageComponent } from './agenda-viewer-page.component';

describe('AgendaViewerPageComponent', () => {
  let component: AgendaViewerPageComponent;
  let fixture: ComponentFixture<AgendaViewerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaViewerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaViewerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
