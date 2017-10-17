import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactViewComponent } from './compact-view.component';

describe('CompactViewComponent', () => {
  let component: CompactViewComponent;
  let fixture: ComponentFixture<CompactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
