import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from '.';
import Icon from '../icon';
import { MenuItemProps } from './type';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children, icon, theme } = props;
  const context = useContext(MenuContext);
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return (
    <li role='presentation' className={classes} style={style} onClick={handleClick}>
      {icon ? <Icon icon={icon} theme={theme} style={{ marginRight: 5 }} /> : null}
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
