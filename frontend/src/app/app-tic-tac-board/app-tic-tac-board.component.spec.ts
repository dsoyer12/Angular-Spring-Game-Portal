import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTicTacBoardComponent } from './app-tic-tac-board.component';

describe('AppTicTacBoardComponent', () => {
  let component: AppTicTacBoardComponent;
  let fixture: ComponentFixture<AppTicTacBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTicTacBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTicTacBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
