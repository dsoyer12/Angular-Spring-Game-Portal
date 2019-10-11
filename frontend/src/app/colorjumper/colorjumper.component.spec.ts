import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorjumperComponent } from './colorjumper.component';

describe('ColorjumperComponent', () => {
  let component: ColorjumperComponent;
  let fixture: ComponentFixture<ColorjumperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorjumperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorjumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
