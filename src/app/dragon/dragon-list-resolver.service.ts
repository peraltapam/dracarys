import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Dragon } from './dragon.model';
import { DragonService } from './dragon.service';

@Injectable({providedIn: 'root'})
export class DragonListResolverService implements Resolve<Dragon[]> {
  constructor(private dragonService: DragonService) {}

  resolve() {
    return this.dragonService.getDragons();
  }
}