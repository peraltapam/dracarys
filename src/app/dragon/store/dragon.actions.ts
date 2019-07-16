import { Action } from '@ngrx/store';

import { Dragon } from '../dragon.model';

export const LOAD_LIST = '[dragons] Load Dragons List';
export const LOAD_LIST_SUCESS = '[dragons] Loaded Dragons List';
export const CREATE_DRAGON = '[dragons] Create New Dragon';
export const EDIT_DRAGON = '[dragons] Edit Dragon';
export const DELETE_DRAGON = '[dragons] Delete Dragon';

export class LoadList implements Action {
  readonly type = LOAD_LIST;
}

export class LoadListSucess implements Action {
  readonly type = LOAD_LIST_SUCESS;
  constructor(public payload: Dragon[]) {}s
}

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