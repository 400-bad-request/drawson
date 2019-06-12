import React from 'react';
import './EditorLayer.scss';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { PopupType } from '../../utils/types/PopupType';
import classNames from 'classnames';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { RootComponent } from '../RootComponent/RootComponent';

interface Props {
  activePopupType: PopupType;
}

const EditorLayerComponent: React.FC<Props> = ({ activePopupType }) => {
  const getClassName = () => {
    return classNames('EditorLayer', {
      blur: !!activePopupType,
    });
  };

  return (
    <div className={getClassName()}>
      <NavigationBar />
      <RootComponent />
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  activePopupType: state.general.activePopupType,
});

export const EditorLayer = connect(mapStateToProps)(EditorLayerComponent);
