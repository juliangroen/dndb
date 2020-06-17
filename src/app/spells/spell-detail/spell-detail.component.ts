import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
    selector: 'app-spell-detail',
    templateUrl: './spell-detail.component.html',
    styleUrls: ['./spell-detail.component.scss'],
})
export class SpellDetailComponent implements OnInit {
    details: Object;

    constructor(private _http: HttpService, private router: Router) {}

    ngOnInit(): void {
        this._http.getDetails(this.router.url).subscribe((data: any) => {
            this.details = data;
        });
    }
}
