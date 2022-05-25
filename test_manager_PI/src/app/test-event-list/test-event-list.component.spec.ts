import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEventListComponent } from './test-event-list.component';

describe('TestEventListComponent', () => {
  let component: TestEventListComponent;
  let fixture: ComponentFixture<TestEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestEventListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
