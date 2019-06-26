import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

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
  isLoading = false;

  constructor(private route: ActivatedRoute, private dragonService: DragonService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dragonId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.dragonId);
  }

  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      response => {
        this.dragonDetail = response;
        this.isLoading = false;
      },
      error => {
        this.error = `Unable to fetch dragon details! ${error.error}`;
        this.isLoading = false;
      }
    )
  }

  deleteDragon(id: string) {
    this.isLoading = true;
    this.dragonService.deleteDragon(id).subscribe(
      response => {
        this.success = `Dragon ${response.name} has been deleted!`;
        this.isLoading = false;
      },
      error => {
        this.error = `Unable to delete selected dragon! ${error.error}`;
        this.isLoading = false;
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
