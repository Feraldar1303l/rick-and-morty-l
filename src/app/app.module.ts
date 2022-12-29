import { NgModule } from '@angular/core';
import { NgModuleRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { app_routing } from '../app/app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { AboutCharacterComponent } from './pages/about-character/about-character.component';
import { NextPageComponent } from './pages/next-page/next-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    AboutCharacterComponent,
    NextPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
