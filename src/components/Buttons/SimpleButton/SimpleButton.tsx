import React from 'react';
import classNames from 'classnames';
import './SimpleButton.scss';

interface Props {
  active?: boolean;
  filled?: boolean;
  key?: string;
  label: string;
  onClick?: () => any;
  style?: React.CSSProperties;
}

export const SimpleButton: React.FC<Props> = ({
  active,
  filled,
  label,
  onClick,
  key,
  style,
}) => {
  const getClassName = () => {
    return classNames('SimpleButton', {
      active: active,
      fill: filled,
    });
  };
  return (
    <div className={getClassName()} onClick={onClick} key={key} style={style}>
      {label}
    </div>
  );
};
