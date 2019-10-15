import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisPieceComponent } from './tetris-piece.component';

describe('TetrisPieceComponent', () => {
  let component: TetrisPieceComponent;
  let fixture: ComponentFixture<TetrisPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
