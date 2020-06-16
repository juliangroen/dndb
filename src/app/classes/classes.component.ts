import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
    classes: Object;

    constructor(private _http: HttpService) {}

    ngOnInit(): void {
        this._http.getItems('classes').subscribe((data: any) => {
            this.classes = data.results;
        });
    }
}
