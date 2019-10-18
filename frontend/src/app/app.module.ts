import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Game2Component } from './game2/game2.component';
import { FloppybirdComponent } from './floppybird/floppybird.component';

import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { TetrisBoardComponent } from './tetris-board/tetris-board.component';

import {CellComponent} from './cell.component';
import { BoardComponent } from './app-tic-tac-board/app-tic-tac-board.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PacmanComponent } from './pacman/pacman.component';
import { DonkeykongComponent } from './donkeykong/donkeykong.component';
import { SonicComponent } from './sonic/sonic.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,

    Game2Component,

    FloppybirdComponent,

    

    UserComponent,

    ScoreComponent,

    NavbarComponent,


    NavbarComponent,


    LoginComponent,

    TetrisBoardComponent,

    
    BoardComponent,
    
    CellComponent,
    
    BoardComponent,



    LandingPageComponent,



    PacmanComponent,



    DonkeykongComponent,



    SonicComponent,



    NewsComponent


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
