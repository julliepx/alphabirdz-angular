import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bird } from '../interfaces/bird';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class BirdService {

    constructor(private httpClient: HttpClient) { }

    getAllBirds(): Observable<Bird[]> {
        return this.httpClient.get<Bird[]>(`${API_URL}/birds/all`);
    }

    getBirdById(id: number): Observable<Bird> {
        return this.httpClient.get<Bird>(`${API_URL}/birds/id/${id}`);
    }
}