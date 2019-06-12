import React from 'react';

interface Props {
  width: number;
  height: number;
  style?: any;
  className?: string;
}

export const ResizableBox: React.FC<Props> = ({
  width,
  height,
  className,
  children,
  style,
}) => {
  return (
    <div
      className={className}
      style={{ width: width + 'px', height: height + 'px', ...style }}
    >
      {children}
    </div>
  );
};
