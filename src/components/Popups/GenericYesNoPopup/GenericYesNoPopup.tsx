import React from 'react';
import './GenericYesNoPopup.scss';
import { SimpleButton } from '../../Buttons/SimpleButton/SimpleButton';

interface Props {
  text: string;
  successLabel: string;
  onSuccess: () => any;
  failureLabel: string;
  onFailure: () => any;
}

export const GenericYesNoPopup: React.FC<Props> = ({
  text,
  successLabel,
  onSuccess,
  failureLabel,
  onFailure,
}) => {
  return (
    <div className="GenericYesNoPopup">
      <div className="Content">{text}</div>
      <div className="Footer">
        <SimpleButton label={successLabel} onClick={onSuccess} filled={true} />
        <SimpleButton label={failureLabel} onClick={onFailure} />
      </div>
    </div>
  );
};
