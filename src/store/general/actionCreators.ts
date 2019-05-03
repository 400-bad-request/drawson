import { GeneralActionTypes } from './types'
import { Action } from '../Action'

export function updateImportPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: Action.UPDATE_IMPORT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateExportPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: Action.UPDATE_EXPORT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateOptionsPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: Action.UPDATE_OPTIONS_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateAboutPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: Action.UPDATE_ABOUT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}
