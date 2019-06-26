import { Component, OnInit } from '@angular/core';

import { Dragon } from '../dragon.model';
import { DragonService } from '../dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.sass']
})
export class DragonListComponent implements OnInit {
  dragonList: Dragon[] = [];
  error = null;
  success = null;
  isLoading = false;

  constructor(private dragonService: DragonService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getDragons();
  }

  private getDragons() {
    this.dragonService.getDragons().subscribe(
      dragons => {
        dragons.sort((prev, next) => (prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) ? 1 : -1);
        this.dragonList = dragons;
        this.isLoading = false;
      },
      error => {
        this.error = `Unable to fetch dragons list!`;
        this.isLoading = false;
      }
    )
  }

  deleteDragon(id: string) {
    this.isLoading = true;
    this.dragonService.deleteDragon(id).subscribe(
      response => {
        this.success = `Dragon ${response.name} has been deleted!`;
        this.getDragons();
      },
      error => {
        this.error = `Unable to delete selected dragon!`;
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
