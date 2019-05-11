import React from 'react';
import './NavigationBar.scss';
import { UnderlineTextButton } from '../Buttons/UnderlineTextButton/UnderlineTextButton';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { PopupType } from '../../utils/types/PopupType';
import { updateActivePopupType } from '../../store/general/actionCreators';

interface IProps {
  updateActivePopupType: (activePopupType: PopupType) => any;
  activePopupType: PopupType;
}

const NavigationBarComponent = (props: IProps) => {
  return (
    <div className="NavigationBar">
      <div className="NavigationBarGroup">
        <div className="Logo">
          <img
            alt={'Drawson'}
            src={'/images/Logo.png'}
            style={{ maxHeight: 30 }}
          />
        </div>
        <UnderlineTextButton
          label={'IMPORT'}
          under={true}
          active={props.activePopupType === PopupType.IMPORT}
          onClick={() => props.updateActivePopupType(PopupType.IMPORT)}
        />
        <UnderlineTextButton
          label={'EXPORT'}
          under={true}
          active={props.activePopupType === PopupType.EXPORT}
          onClick={() => props.updateActivePopupType(PopupType.EXPORT)}
        />
        <UnderlineTextButton
          label={'OPTIONS'}
          under={true}
          active={props.activePopupType === PopupType.OPTIONS}
          onClick={() => props.updateActivePopupType(PopupType.OPTIONS)}
        />
        <UnderlineTextButton label={'COMPILE'} under={true} />
      </div>
      <div className="NavigationBarGroup">
        <UnderlineTextButton
          label={'ABOUT'}
          under={true}
          active={props.activePopupType === PopupType.ABOUT}
          onClick={() => props.updateActivePopupType(PopupType.ABOUT)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  activePopupType: state.general.activePopupType,
});

const dispatchToProps = {
  updateActivePopupType: updateActivePopupType,
};

export const NavigationBar = connect(
  mapStateToProps,
  dispatchToProps
)(NavigationBarComponent);
