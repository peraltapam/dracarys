import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragon } from '../dragon.model';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.sass']
})
export class DragonListComponent implements OnInit {
  dragonList: Dragon[] = [];
  apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDragons();
  }

  private getDragons() {
    this.http.get(`${this.apiUrl}dragon`).subscribe(
      (dragons:Dragon[]) => {
        dragons.sort((prev, next) => (prev.name > next.name) ? 1 : -1);
        this.dragonList = dragons;
      }
    );
  }

}
