import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragon.model';
import { DragonService } from '../../dragon.service';

@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.sass']
})
export class DragonDetailComponent implements OnInit {
  dragonDetail: Dragon;
  dragonId: string;

  constructor(private route: ActivatedRoute, private dragonService: DragonService) { }

  ngOnInit() {
    this.dragonId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.dragonId);
  }

  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      (response) => {
        this.dragonDetail = response;
      }
    )
  }

}
