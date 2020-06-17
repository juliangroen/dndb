import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstersComponent } from './monsters/monsters.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClassesComponent } from './classes/classes.component';
import { SpellsComponent } from './spells/spells.component';
import { HomeComponent } from './home/home.component';
import { MonsterDetailComponent } from './monsters/monster-detail/monster-detail.component';

@NgModule({
    declarations: [AppComponent, MonstersComponent, ClassesComponent, SpellsComponent, HomeComponent, MonsterDetailComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
