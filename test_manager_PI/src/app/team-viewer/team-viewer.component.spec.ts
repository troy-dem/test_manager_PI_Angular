import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamViewerComponent } from './team-viewer.component';

describe('TeamViewerComponent', () => {
  let component: TeamViewerComponent;
  let fixture: ComponentFixture<TeamViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
