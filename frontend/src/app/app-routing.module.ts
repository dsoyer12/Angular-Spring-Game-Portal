import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { Game2Component } from './game2/game2.component';
import { FloppybirdComponent } from './floppybird/floppybird.component';
import { LoginComponent } from './login/login.component';
import { BattleshipComponent } from './battleship/battleship.component';


const routes: Routes = [ { path:'user', component: UserComponent}, { path:'floppy', component: FloppybirdComponent},{ path:'pang', component: Game2Component},{ path:'login', component: LoginComponent}, { path:'battleship', component: BattleshipComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
