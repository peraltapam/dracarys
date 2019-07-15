import * as DragonActions from './dragon.actions';

const initialState = {
  dragons: [
    {name: 'drogon', type: 'evil'}
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
      const dragon = state.find(elem => elem.id === payload.id)
      return {
        ...state,
        dragons: []
      };
    case DragonActions.DELETE_DRAGON:
    default:
      return state;
  }
}