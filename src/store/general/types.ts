import {Action} from "redux";

export enum GeneralActionTypes {
    UPDATE_IMPORT_POPUP_STATUS = 'UPDATE_IMPORT_POPUP_STATUS',
    UPDATE_EXPORT_POPUP_STATUS = 'UPDATE_EXPORT_POPUP_STATUS',
    UPDATE_ABOUT_POPUP_STATUS = 'UPDATE_ABOUT_POPUP_STATUS'
}

export interface GeneralState {
    isImportPopupOpen: boolean;
    isExportPopupOpen: boolean;
    isAboutPopupOpen: boolean;
}