import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonstersComponent } from './monsters/monsters.component';
import { ClassesComponent } from './classes/classes.component';
import { SpellsComponent } from './spells/spells.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'monsters', component: MonstersComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'spells', component: SpellsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
