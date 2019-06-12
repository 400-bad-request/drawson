import React from 'react';
import classNames from 'classnames';
import './UnderlineTextButton.scss';

interface Props {
  under?: boolean;
  over?: boolean;
  active?: boolean;
  key?: string;
  label: string;
  onClick?: () => any;
  style?: React.CSSProperties;
}

export const UnderlineTextButton: React.FC<Props> = props => {
  const getClassName = () => {
    return classNames('UnderlineTextButton', {
      under: props.under,
      over: props.over,
      active: props.active,
    });
  };
  return (
    <div
      className={getClassName()}
      onClick={props.onClick}
      key={props.key}
      style={props.style}
    >
      {props.label}
    </div>
  );
};
