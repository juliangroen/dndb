import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-monsters',
    templateUrl: './monsters.component.html',
    styleUrls: ['./monsters.component.scss'],
})
export class MonstersComponent implements OnInit {
    monsters: Object;

    constructor(private _http: HttpService) {}

    ngOnInit(): void {
        this._http.getMonsters().subscribe((data) => {
            const someMonsters: Object[] = [];
            for (let index = 64; index < 127; index++) {
                const element = data.results[index];
                someMonsters.push(element);
            }
            this.monsters = someMonsters;
            //this.monsters = data.results;
        });
    }
}
