# Menus

---

## API

## 类型声明

```ts
export type MenuMode = 'horizontal' | 'vertical';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
  icon?: IconProp;
  theme?: ThemeProps;
  children?: ReactNode;
}

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  icon?: IconProp;
  theme?: ThemeProps;
  children?: ReactNode;
}

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  defaultOpenSubMenus?: string[];
  children?: ReactNode;
}

export interface MenuContextType {
  index: string;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export type MenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>;
  SubMenu: React.FC<SubMenuProps>;
};
```
