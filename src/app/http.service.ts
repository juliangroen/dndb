import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getItems(type: String) {
        return this.http.get(`https://www.dnd5eapi.co/api/${type}`);
    }
}
