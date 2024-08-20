import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './style/index.scss';

library.add(fas);

export { default as Icon } from './ui/icon';
export type { ThemeProps } from './ui/icon/type';

export { default as Button } from './ui/button';
export type { ButtonSize, ButtonType } from './ui/button/type';

export { default as Card } from './ui/card';
export { default as Tabs } from './ui/tabs';
export { default as Message } from './ui/message';

export { default as Menu } from './ui/menus';
export { default as MenuItem } from './ui/menus/menu-item';
export { default as SubMenu } from './ui/menus/sub-menu';
