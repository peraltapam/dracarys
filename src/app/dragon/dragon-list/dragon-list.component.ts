import { Component, OnInit } from '@angular/core';

import { Dragon } from '../dragon.model';
import { DragonService } from '../../dragon.service'

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.sass']
})
export class DragonListComponent implements OnInit {
  dragonList: Dragon[] = [];

  constructor(private dragonService: DragonService) {}

  ngOnInit() {
    this.getDragons();
  }

  private getDragons() {
    this.dragonService.getDragons().subscribe(
      (dragons:Dragon[]) => {
        dragons.sort((prev, next) => (prev.name > next.name) ? 1 : -1);
        this.dragonList = dragons;
      }
    )
  }

}
