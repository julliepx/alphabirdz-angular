import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getAllUsers(): Observable<Users[]> {
        return this.httpClient.get<Users[]>(`${API_URL}/users/all`);
    }
}