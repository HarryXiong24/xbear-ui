import { ReactNode, CSSProperties } from 'react';

interface Action {
  // action 名
  name: string;
  // action 对应的点击事件
  event?: () => void;
}

export interface CardProps {
  // 是否阴影
  shadow?: boolean;
  // hover 的时候显示阴影
  showShadowWhenHover?: boolean;
  // title 多了是否换行
  titleOverflowHidden?: boolean;
  // 正常的 class 属性
  className?: string;
  // style 属性
  style?: CSSProperties;
  // 卡片标题
  title?: string;
  // title 前加图标
  cover?: string;
  // title 右边额外插入的元素
  extra?: ReactNode;
  // 卡片按钮
  actions?: Action[];
  // loading?: boolean;
  children?: ReactNode;
}
