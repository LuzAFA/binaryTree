import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTreeComponent } from './list-tree.component';

describe('ListTreeComponent', () => {
  let component: ListTreeComponent;
  let fixture: ComponentFixture<ListTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
