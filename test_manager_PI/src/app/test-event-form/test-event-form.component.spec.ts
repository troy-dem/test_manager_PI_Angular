import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEventFormComponent } from './test-event-form.component';

describe('TestEventFormComponent', () => {
  let component: TestEventFormComponent;
  let fixture: ComponentFixture<TestEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEventFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
