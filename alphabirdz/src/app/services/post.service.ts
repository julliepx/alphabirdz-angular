import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { API_URL } from 'src/environments/environment';

@Injectable()
export class PostService {

    constructor(private httpClient: HttpClient) { }

    getAllPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${API_URL}/posts/all`);
    }

    getPostById(id: number): Observable<Post> {
        return this.httpClient.get<Post>(`${API_URL}/posts/id/${id}`);
    }

    savePost(post: Post): Observable<Post> {
        return this.httpClient.post<Post>(`${API_URL}/posts/add`, post);
    }
}