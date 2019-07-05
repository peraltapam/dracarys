import { Component, OnInit } from '@angular/core';

import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.sass']
})
export class DragonListComponent implements OnInit {
  dragonList: Dragon[] = [];

  alert = null;
  isError = null;
  isLoading = false;

  constructor(private dragonService: DragonService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.alert = null;

    this.route.data.subscribe(data => {
      this.dragonList = data[0];
      this.sortList();
      this.isLoading = false;
    });
    //todo: adding resolvers breaks the current spinner logic. Implement fix.
  }

  // retrieve dragon list from api
  getDragons() {
    this.dragonService.getDragons().subscribe(
      dragons => {
        dragons.sort((prev, next) => (prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) ? 1 : -1);
        this.dragonList = dragons;
        this.isLoading = false;
      },
      error => {
        this.alert = `Unable to fetch dragons list!`;
        this.isError = true;
        this.isLoading = false;
      }
    )
  }

  // make delete request to api
  onDeleteDragon(id: string) {
    if(confirm(`Are you sure you want to delete this dragon?`)) {
      this.isLoading = true;
  
      this.dragonService.deleteDragon(id).subscribe(
        response => {
          this.alert = `Dragon ${response.name} has been deleted!`;
          this.isError = false;
          this.getDragons();
        },
        error => {
          this.alert = `Unable to delete selected dragon!`;
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

  // sort dragon list alphabetically
  sortList() {
    this.dragonList.sort((prev, next) => (prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) ? 1 : -1);
  }
}
