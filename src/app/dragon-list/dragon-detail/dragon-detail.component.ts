import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragon.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.sass']
})
export class DragonDetailComponent implements OnInit {
  dragonDetail: Dragon;
  dragonId: number;
  apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.dragonId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.dragonId);
  }

  getDragonDetails(id: number) {
    this.http.get(`${this.apiUrl}dragon/${id}`).subscribe(
      (response: Dragon) => {
        this.dragonDetail = response;
      }
    )
  }

}
