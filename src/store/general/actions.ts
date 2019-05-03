import {
  GeneralActionTypes,
  UPDATE_ABOUT_POPUP_STATUS,
  UPDATE_EXPORT_POPUP_STATUS,
  UPDATE_IMPORT_POPUP_STATUS,
  UPDATE_OPTIONS_POPUP_STATUS,
} from './types'

export function updateImportPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: UPDATE_IMPORT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateExportPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: UPDATE_EXPORT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateOptionsPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: UPDATE_OPTIONS_POPUP_STATUS,
    payload: {
      status,
    },
  }
}

export function updateAboutPopupStatus(status: boolean): GeneralActionTypes {
  return {
    type: UPDATE_ABOUT_POPUP_STATUS,
    payload: {
      status,
    },
  }
}
