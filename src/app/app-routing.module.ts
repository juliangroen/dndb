import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MonsterDetailComponent } from './monsters/monster-detail/monster-detail.component';
import { ClassesComponent } from './classes/classes.component';
import { ClassDetailComponent } from './classes/class-detail/class-detail.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellDetailComponent } from './spells/spell-detail/spell-detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'monsters', component: MonstersComponent },
    { path: 'monsters/:id', component: MonsterDetailComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'classes/:id', component: ClassDetailComponent },
    { path: 'spells', component: SpellsComponent },
    { path: 'spells/:id', component: SpellDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
