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
  error = null;
  success = null;

  constructor(private route: ActivatedRoute, private dragonService: DragonService) { }

  ngOnInit() {
    this.dragonId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.dragonId);
  }

  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      response => {
        this.dragonDetail = response;
      },
      error => {
        this.error = `Unable to fetch dragon details! ${error.error}`;
      }
    )
  }

  deleteDragon(id: string) {
    this.dragonService.deleteDragon(id).subscribe(
      response => {
        this.success = `Dragon ${response.name} has been deleted!`;
      },
      error => {
        this.error = `Unable to delete selected dragon! ${error.error}`;
      }
    );
  }

  reset(type: string) {
    if(type === 'success') {
      this.success = null;
    } else {
      this.error = null;
    }
  }

}
