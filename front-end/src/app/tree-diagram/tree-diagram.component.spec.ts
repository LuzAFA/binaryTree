import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDiagramComponent } from './tree-diagram.component';

describe('TreeDiagramComponent', () => {
  let component: TreeDiagramComponent;
  let fixture: ComponentFixture<TreeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
