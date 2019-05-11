import React from 'react';
import './EditorLayer.scss';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import RootComponent from '../RootComponent/RootComponent';
import { PopupType } from '../../utils/types/PopupType';
import classNames from 'classnames';
import { AppState } from '../../store';
import { connect } from 'react-redux';

interface IProps {
  activePopupType: PopupType;
}

const EditorLayerComponent = (props: IProps) => {
  const getClassName = () => {
    return classNames('EditorLayer', {
      blur: !!props.activePopupType,
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
