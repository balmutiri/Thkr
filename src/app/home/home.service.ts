import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apis.default.url;

  constructor(private http: HttpClient) { }

  getRandomMessage(): Observable<{ message: string }>{ 
    return this.http.get<{ message: string }>(`${this.apiUrl}/api/random-message`);
  }

  getRandomZker(): Observable<{ message: string }>{ 
    return this.http.get<{ message: string }>(`${this.apiUrl}/api/random-zker`);
  }
}
