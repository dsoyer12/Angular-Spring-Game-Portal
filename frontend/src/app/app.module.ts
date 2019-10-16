import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Game2Component } from './game2/game2.component';
import { FloppybirdComponent } from './floppybird/floppybird.component';
import { ColorjumperComponent } from './colorjumper/colorjumper.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { TetrisBoardComponent } from './tetris-board/tetris-board.component';
import {BoardComponent} from './board.component';
import {CellComponent} from './cell.component';

@NgModule({
  declarations: [
    AppComponent,

    Game2Component,

    FloppybirdComponent,

    ColorjumperComponent,

    UserComponent,

    ScoreComponent,

    NavbarComponent,


    NavbarComponent,


    LoginComponent,

    TetrisBoardComponent,
    
    BoardComponent,
    
    CellComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
