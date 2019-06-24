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
    return this.http.get(`${this.apiUrl}dragon`);
  }

  getDragonDetails(id: string) {
    return this.http.get<Dragon>(`${this.apiUrl}dragon/${id}`);
  }

  updateDragon(data: string) {
    //todo
  }

  createDragon(data: string) {
    return this.http.post<Dragon>(`${this.apiUrl}dragon`, JSON.parse(data));
  }

  deleteDragon(id: string) {
    //todo
    // this.http.delete(`${this.apiUrl}dragon/${id}`);
  }
}
