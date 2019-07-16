import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as DragonActions from '../store/dragon.actions';
import { DragonService } from '../dragon.service';
import { Dragon } from '../dragon.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DragonEffects {

  @Effect()
  listLoader = this.actions$.pipe(
    ofType(DragonActions.LOAD_LIST),
    switchMap((listData: DragonActions.LoadList) => {
      return this.dragonService.getDragons().pipe(
        catchError(error => {
          return of();
        }),
        map((responseData: Dragon[]) => {
          return of(new DragonActions.LoadListSucess(responseData));
        })
      );
    })
  );
  
  constructor(private actions$: Actions, private dragonService: DragonService) {}


}