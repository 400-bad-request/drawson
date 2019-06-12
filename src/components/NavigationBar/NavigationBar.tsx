import React from 'react';
import './NavigationBar.scss';
import { UnderlineTextButton } from '../Buttons/UnderlineTextButton/UnderlineTextButton';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { PopupType } from '../../utils/types/PopupType';
import { updateActivePopupType } from '../../store/general/actionCreators';

interface Props {
  updateActivePopupType: (activePopupType: PopupType) => any;
  activePopupType: PopupType;
}

const NavigationBarComponent: React.FC<Props> = ({
  activePopupType,
  updateActivePopupType,
}) => {
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
          active={activePopupType === PopupType.IMPORT}
          onClick={() => updateActivePopupType(PopupType.IMPORT)}
        />
        <UnderlineTextButton
          label={'EXPORT'}
          under={true}
          active={activePopupType === PopupType.EXPORT}
          onClick={() => updateActivePopupType(PopupType.EXPORT)}
        />
        <UnderlineTextButton
          label={'OPTIONS'}
          under={true}
          active={activePopupType === PopupType.OPTIONS}
          onClick={() => updateActivePopupType(PopupType.OPTIONS)}
        />
        <UnderlineTextButton label={'COMPILE'} under={true} />
      </div>
      <div className="NavigationBarGroup">
        <UnderlineTextButton
          label={'ABOUT'}
          under={true}
          active={activePopupType === PopupType.ABOUT}
          onClick={() => updateActivePopupType(PopupType.ABOUT)}
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
