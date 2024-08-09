import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { ThemeProps } from '../icon/type';

export type ButtonSize = 'lg' | 'md' | 'sm';
export type ButtonType =
  | 'primary'
  | 'default'
  | 'danger'
  | 'link'
  | 'ghost'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'dark';

export interface BaseButtonProps {
  // 设置按钮是否可用
  disabled?: boolean;
  // 设置按钮大小
  size?: ButtonSize;
  // 设置按钮类型
  type?: ButtonType;
  // 设置加载状态
  loading?: boolean;
  // 是否为圆形
  circle?: boolean;
  // 设置按钮额外的样式
  className?: string;
  // 按钮里的子元素
  children?: React.ReactNode;
  // 设置 link 类型按钮的跳转链接
  href?: string;
  // 添加图标到标题后
  icon?: IconProp;
  // 图标主题
  theme?: ThemeProps;
}

type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>;
type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLElement>, 'type'>;

// 需要联合原生的 Button 类型和 link 的类型
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
