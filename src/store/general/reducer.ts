import { GeneralActionTypes, GeneralState } from './types'
import { Action } from '../Action'

const initialState: GeneralState = {
  isImportPopupOpen: false,
  isExportPopupOpen: false,
  isOptionsPopupOpen: false,
  isAboutPopupOpen: false,
}

export function generalReducer(
  state = initialState,
  action: GeneralActionTypes
): GeneralState {
  switch (action.type) {
    case Action.UPDATE_IMPORT_POPUP_STATUS: {
      return {
        ...state,
        isImportPopupOpen: action.payload.status,
      }
    }
    case Action.UPDATE_EXPORT_POPUP_STATUS: {
      return {
        ...state,
        isExportPopupOpen: action.payload.status,
      }
    }
    case Action.UPDATE_OPTIONS_POPUP_STATUS: {
      return {
        ...state,
        isOptionsPopupOpen: action.payload.status,
      }
    }
    case Action.UPDATE_ABOUT_POPUP_STATUS: {
      return {
        ...state,
        isAboutPopupOpen: action.payload.status,
      }
    }
    default:
      return state
  }
}
