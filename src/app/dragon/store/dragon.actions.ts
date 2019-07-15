import { Action } from '@ngrx/store';

import { Dragon } from '../dragon.model';

export const CREATE_DRAGON = '[dragons] Create New Dragon';
export const EDIT_DRAGON = '[dragons] Edit Dragon';
export const DELETE_DRAGON = '[dragons] Delete Dragon';


export class CreateDragon implements Action {
  readonly type = CREATE_DRAGON;
  constructor(public payload: Dragon){}
}

export class EditDragon implements Action {
  readonly type = EDIT_DRAGON;
  constructor(public payload: Dragon){}
}

export class DeleteDragon implements Action {
  readonly type = DELETE_DRAGON;
  constructor(public payload: number){}
}

// bundle all the types for typescript support
export type dragonActions = 
    CreateDragon
  | EditDragon
  | DeleteDragon;