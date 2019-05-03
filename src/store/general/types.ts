export const UPDATE_IMPORT_POPUP_STATUS = 'UPDATE_IMPORT_POPUP_STATUS'
export const UPDATE_EXPORT_POPUP_STATUS = 'UPDATE_EXPORT_POPUP_STATUS'
export const UPDATE_OPTIONS_POPUP_STATUS = 'UPDATE_OPTIONS_POPUP_STATUS'
export const UPDATE_ABOUT_POPUP_STATUS = 'UPDATE_ABOUT_POPUP_STATUS'

export type GeneralState = {
  isImportPopupOpen: boolean
  isExportPopupOpen: boolean
  isOptionsPopupOpen: boolean
  isAboutPopupOpen: boolean
}

interface UpdateImportPopupStatusAction {
  type: typeof UPDATE_IMPORT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateExportPopupStatusAction {
  type: typeof UPDATE_EXPORT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateOptionsPopupStatusAction {
  type: typeof UPDATE_OPTIONS_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateAboutPopupStatusAction {
  type: typeof UPDATE_ABOUT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

export type GeneralActionTypes =
  | UpdateImportPopupStatusAction
  | UpdateExportPopupStatusAction
  | UpdateOptionsPopupStatusAction
  | UpdateAboutPopupStatusAction
