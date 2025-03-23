import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAzkarList } from './azkar.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzkarService {

  constructor(private http: HttpClient) { }

  getAzkarList(): Observable<IAzkarList[]>{ 
    return this.http.get<IAzkarList[]>('/api/azkar-list');
  }
  
}

