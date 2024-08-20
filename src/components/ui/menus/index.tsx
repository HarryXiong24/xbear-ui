import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import { MenuComponent, MenuContextType, MenuItemProps, MenuProps, SubMenuProps } from './type';
import MenuItem from './menu-item';
import SubMenu from './sub-menu';

export const MenuContext = createContext<MenuContextType>({ index: '0' });

export const Menu = (
  props: MenuProps & {
    Item: React.FC<MenuItemProps>;
    SubMenu: React.FC<SubMenuProps>;
  }
) => {
  const {
    className,
    mode = 'horizontal',
    style,
    children,
    defaultIndex = '0',
    onSelect,
    defaultOpenSubMenus = [],
  } = props;

  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames('xbear-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const handleClick = (index: string) => {
    setActive(index);
    onSelect && onSelect(index);
  };
  const passedContext: MenuContextType = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

(Menu as MenuComponent).Item = MenuItem;
(Menu as MenuComponent).SubMenu = SubMenu;

export default Menu as MenuComponent;
