import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCharacterComponent } from './pages/about-character/about-character.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { NextPageComponent } from './pages/next-page/next-page.component';


const app_routes: Routes = [

    {path: 'about/:id', component: AboutCharacterComponent},
    {path: 'home', component: CharactersComponent},
    {path: 'page/:num', component: NextPageComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}

];

export const app_routing = RouterModule.forRoot(app_routes);