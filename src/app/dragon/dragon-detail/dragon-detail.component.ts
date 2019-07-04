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

    this.route.data.subscribe(data => {
      if (data[0].error) {
        this.alert = 'Unable to fetch dragon details!';
        this.isError = true;
      } else {
        this.dragonDetail = data[0];
      }
    });
    //todo: adding resolvers breaks the current spinner logic. Implement fix.
  }

  // make delete request to api
  onDeleteDragon(id: string) {
    if(confirm(`Are you sure you want to delete dragon ${this.dragonDetail.name}?`)) {
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
  }

  // clear alert message
  resetAlert() {
    this.alert = null;
  }

}
