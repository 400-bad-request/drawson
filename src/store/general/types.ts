import { Action } from '../Action'

export type GeneralState = {
  isImportPopupOpen: boolean
  isExportPopupOpen: boolean
  isOptionsPopupOpen: boolean
  isAboutPopupOpen: boolean
}

interface UpdateImportPopupStatusAction {
  type: typeof Action.UPDATE_IMPORT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateExportPopupStatusAction {
  type: typeof Action.UPDATE_EXPORT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateOptionsPopupStatusAction {
  type: typeof Action.UPDATE_OPTIONS_POPUP_STATUS
  payload: {
    status: boolean
  }
}

interface UpdateAboutPopupStatusAction {
  type: typeof Action.UPDATE_ABOUT_POPUP_STATUS
  payload: {
    status: boolean
  }
}

export type GeneralActionTypes =
  | UpdateImportPopupStatusAction
  | UpdateExportPopupStatusAction
  | UpdateOptionsPopupStatusAction
  | UpdateAboutPopupStatusAction
