import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getRandomMessage(): Observable<{ message: string }>{ 
    return this.http.get<{ message: string }>('/api/random-message');
  }

  getRandomZker(): Observable<{ message: string }>{ 
    return this.http.get<{ message: string }>('/api/random-zker');
  }
}
