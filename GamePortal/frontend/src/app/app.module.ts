import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Game2Component } from './game2/game2.component';
import { FloppybirdComponent } from './floppybird/floppybird.component';
import { ColorjumperComponent } from './colorjumper/colorjumper.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';
import { HighscoreComponent } from './highscore/highscore.component';

@NgModule({
  declarations: [
    AppComponent,

    Game2Component,

    FloppybirdComponent,

    ColorjumperComponent,

    UserComponent,

    ScoreComponent,

    HighscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
