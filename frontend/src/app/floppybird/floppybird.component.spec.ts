import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloppybirdComponent } from './floppybird.component';

describe('FloppybirdComponent', () => {
  let component: FloppybirdComponent;
  let fixture: ComponentFixture<FloppybirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloppybirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloppybirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
