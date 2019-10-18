import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonkeykongComponent } from './donkeykong.component';

describe('DonkeykongComponent', () => {
  let component: DonkeykongComponent;
  let fixture: ComponentFixture<DonkeykongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonkeykongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonkeykongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
