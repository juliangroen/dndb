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
        this._http.getItems('monsters').subscribe((data: any) => {
            this.monsters = data.results;
        });
    }
}
