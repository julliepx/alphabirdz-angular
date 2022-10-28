import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${API_URL}/users/all`);
    }

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${API_URL}/users/id/${id}`);
    }
}