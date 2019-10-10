import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Game2Component } from './game2/game2.component';
import { FloppybirdComponent } from './floppybird/floppybird.component';
import { ColorjumperComponent } from './colorjumper/colorjumper.component';

@NgModule({
  declarations: [
    AppComponent,

    Game2Component,

    FloppybirdComponent,

    ColorjumperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
