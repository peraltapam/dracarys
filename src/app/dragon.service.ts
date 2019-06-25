import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragon } from './dragon/dragon.model';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  getDragons() {
    return this.http.get<Dragon[]>(`${this.apiUrl}dragon`);
  }

  getDragonDetails(id: string) {
    return this.http.get<Dragon>(`${this.apiUrl}dragon/${id}`);
  }

  editDragon(id: string, data: string) {
    return this.http.put<Dragon>(`${this.apiUrl}dragon/${id}`, JSON.parse(data));
  }

  createDragon(data: string) {
    return this.http.post<Dragon>(`${this.apiUrl}dragon`, JSON.parse(data));
  }

  deleteDragon(id: string) {
    return this.http.delete<Dragon>(`${this.apiUrl}dragon/${id}`);
  }
}
