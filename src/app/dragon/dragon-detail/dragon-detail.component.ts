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

  alert = null;
  isError = null;
  isLoading = false;

  constructor(private route: ActivatedRoute, private dragonService: DragonService) { }

  ngOnInit() {
    this.isLoading = true;
    this.alert = null;

    // retrieve dragon id from url and load data
    this.dragonId = this.route.snapshot.params['id'];
    this.getDragonDetails(this.dragonId);
  }

  // request dragon detail from api
  getDragonDetails(id: string) {
    this.dragonService.getDragonDetails(id).subscribe(
      response => {
        this.dragonDetail = response;
        this.isLoading = false;
      },
      error => {
        this.alert = 'Unable to fetch dragon details!';
        this.isError = true;
        this.isLoading = false;
      }
    )
  }

  // make delete request to api
  onDeleteDragon(id: string) {
    this.isLoading = true;

    this.dragonService.deleteDragon(id).subscribe(
      response => {
        this.alert = `Dragon ${response.name} has been deleted!`;
        this.isError = false;
        this.isLoading = false;
      },
      error => {
        this.alert = 'Unable to delete selected dragon!';
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

  // clear alert message
  resetAlert() {
    this.alert = null;
  }

}
