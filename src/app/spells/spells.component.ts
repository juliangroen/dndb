import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent implements OnInit {
    spells: Object;

    constructor(private _http: HttpService) {}

    ngOnInit(): void {
        this._http.getItems('spells').subscribe((data: any) => {
            this.spells = data.results;
        });
    }
}
