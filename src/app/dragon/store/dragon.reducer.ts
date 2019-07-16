import * as DragonActions from './dragon.actions';

const initialState = {
  dragons: [
    {id: 'asasas', name: 'drogon', type: 'evil'}
  ]
}

export function DragonReducer(
  state = initialState,
  action: DragonActions.dragonActions
) {
  switch (action.type) {
    case DragonActions.CREATE_DRAGON:
      return {
        ...state,
        dragons: [...state.dragons, action.payload]
      }
    case DragonActions.EDIT_DRAGON:
      const dragon = [...state.dragons].find(elem => elem.id === action.payload.id);
      const editedDragon = {
        ...dragon,
        ...action.payload
      };
      const updatedDragonList = [...state.dragons];
      

      return {
        ...state,
        dragons: []
      };
    case DragonActions.DELETE_DRAGON:
    default:
      return state;
  }
}