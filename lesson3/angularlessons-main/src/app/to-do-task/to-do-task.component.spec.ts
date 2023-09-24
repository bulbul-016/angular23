import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoTaskComponent } from './to-do-task.component';

describe('ToDoTaskComponent', () => {
  let component: ToDoTaskComponent;
  let fixture: ComponentFixture<ToDoTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoTaskComponent]
    });
    fixture = TestBed.createComponent(ToDoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
