import React, { useCallback } from 'react';
import classnames from 'classnames';
import './button.less';

type ButtonProps = {
  theme?: 'pink' | 'blue' | 'green' | 'default';
  size?: 'H54' | 'H44' | 'H40' | 'H32' | 'H36' | 'H28';
  shape?: 'square' | 'circle' | 'round';
  bolder?: boolean;
  ghost?: boolean;
  block?: boolean;
  style?: Object;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

const noop = () => {};

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      theme = 'default',
      size = 'H40',
      shape = 'square',
      bolder = false,
      ghost = false,
      block = false,
      className = '',
      children,
      onClick = noop,
      ...otherProps
    },
    ref?:
      | string
      | ((instance: HTMLButtonElement | null) => void)
      | React.RefObject<HTMLButtonElement>
      | null
      | undefined
  ) => {
    const handleOnClick = useCallback(e => {
      if (onClick) {
        onClick(e);
      }
    }, [onClick]);

    return (
      <button
        type="button"
        ref={ref}
        className={classnames(
          'mj-btn',
          {
            [`btn-${theme}`]: theme !== 'default',
            [`btn-${size}`]: size,
            [`btn-${shape}`]: shape,
            'btn-bold': bolder,
            'btn-ghost': ghost,
            'btn-block': block,
          },
          className
        )}
        onClick={e => handleOnClick(e)}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);

export default Button;
