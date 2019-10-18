import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonicComponent } from './sonic.component';

describe('SonicComponent', () => {
  let component: SonicComponent;
  let fixture: ComponentFixture<SonicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
