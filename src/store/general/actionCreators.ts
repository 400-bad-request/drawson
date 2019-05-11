import { GeneralActionTypes } from './types';
import { Action } from '../Action';
import { PopupType } from '../../utils/types/PopupType';

export function updateActivePopupType(
  activePopupType: PopupType
): GeneralActionTypes {
  return {
    type: Action.UPDATE_ACTIVE_POPUP_TYPE,
    payload: {
      activePopupType,
    },
  };
}
