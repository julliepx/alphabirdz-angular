import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Birds } from '../birds';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class BirdService {

    constructor(private httpClient: HttpClient) { }

    getAllBirds(): Observable<Birds[]> {
        return this.httpClient.get<Birds[]>(`${API_URL}/birds`);
    }
}