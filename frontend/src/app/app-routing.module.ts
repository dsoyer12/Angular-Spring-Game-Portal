import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Game2Component } from './game2/game2.component';


import { FloppybirdComponent } from './floppybird/floppybird.component';
import { LoginComponent } from './login/login.component';
import { TetrisBoardComponent } from './tetris-board/tetris-board.component';

  import { BoardComponent } from './app-tic-tac-board/app-tic-tac-board.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth.guard';
import { PacmanComponent } from './pacman/pacman.component';
import { DonkeykongComponent } from './donkeykong/donkeykong.component';
import { SonicComponent } from './sonic/sonic.component';

import { GamepageComponent } from './gamepage/gamepage.component';



import { ScoreComponent } from './score/score.component';
import {LeaderboardComponent}from './leaderboard/leaderboard.component';



const routes: Routes = [{ path:'home',canActivate: [AuthGuard], component: GamepageComponent},{ path:'leaderboard',canActivate: [AuthGuard], component: LeaderboardComponent},{ path:'score',canActivate: [AuthGuard], component: ScoreComponent}, { path:'donkeykong',canActivate: [AuthGuard], component: DonkeykongComponent},{ path:'sonic',canActivate: [AuthGuard], component: SonicComponent},{ path:'pacman',canActivate: [AuthGuard], component: PacmanComponent},{ path:'tictac',canActivate: [AuthGuard], component: BoardComponent},{ path:'', component: LandingPageComponent},{ path:'tetris', canActivate: [AuthGuard],component: TetrisBoardComponent},{ path:'user',canActivate: [AuthGuard], component: UserComponent}, { path:'floppy',canActivate: [AuthGuard], component: FloppybirdComponent},{ path:'pang',canActivate: [AuthGuard], component: Game2Component},{ path:'login', component: LoginComponent}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {constructor(private router: Router){} }
