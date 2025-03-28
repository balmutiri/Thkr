import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAzkarList } from './azkar.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AzkarService {
  private apiUrl = environment.apis.default.url;

  constructor(private http: HttpClient) { }

  getAzkarList(): Observable<IAzkarList[]>{ 
    return this.http.get<IAzkarList[]>(`${this.apiUrl}/api/azkar-list`);
  }
  
}

