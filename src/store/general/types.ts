import { Action } from '../Action'
import {PopupType} from "../../data/PopupType";

export type GeneralState = {
    activePopupType: PopupType
}

interface UpdateActivePopupTypeAction {
    type: typeof Action.UPDATE_ACTIVE_POPUP_TYPE
  payload: {
      activePopupType: PopupType
  }
}

export type GeneralActionTypes =
    | UpdateActivePopupTypeAction
