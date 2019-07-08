import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragon } from './dragon.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) { }

  getDragons() {
    return this.http.get<Dragon[]>(environment.apiUrl);
  }

  getDragonDetails(id: string) {
    return this.http.get<Dragon>(`${environment.apiUrl}/${id}`);
  }

  editDragon(id: string, data: Dragon) {
    return this.http.put<Dragon>(`${environment.apiUrl}/${id}`, data);
  }

  createDragon(data: Dragon) {
    return this.http.post<Dragon>(environment.apiUrl, data);
  }

  deleteDragon(id: string) {
    return this.http.delete<Dragon>(`${environment.apiUrl}/${id}`);
  }
}
