import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../interfaces/posts';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class PostService {

    constructor(private httpClient: HttpClient) { }

    getAllPosts(): Observable<Posts[]> {
        return this.httpClient.get<Posts[]>(`${API_URL}/posts/all`);
    }
}