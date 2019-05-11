import { GeneralActionTypes, GeneralState } from './types';
import { Action } from '../Action';

const initialState: GeneralState = {
  activePopupType: null,
};

export function generalReducer(
  state = initialState,
  action: GeneralActionTypes
): GeneralState {
  switch (action.type) {
    case Action.UPDATE_ACTIVE_POPUP_TYPE: {
      return {
        ...state,
        activePopupType: action.payload.activePopupType,
      };
    }
    default:
      return state;
  }
}
