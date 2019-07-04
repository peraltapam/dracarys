import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

import { Dragon } from './dragon.model';
import { DragonService } from './dragon.service';

@Injectable({providedIn: 'root'})
export class DragonResolverService implements Resolve<Dragon> {
  constructor(private dragonService: DragonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Dragon> {
    return this.dragonService.getDragonDetails(route.params.id).pipe(
      catchError(error => {
        return of(error);
      })
    );
  }
}