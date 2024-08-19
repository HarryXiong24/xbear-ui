import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps, ThemeProps } from './type';

const prefixCls = 'xbear-icon';

export const Icon = (props: IconProps) => {
  const { className = undefined, theme = 'primary', icon, ...restProps } = props;
  // 选择性注入 class 中
  const classes = classNames('xbear-icon', className, {
    // eg 注入属性 icon-primary: true
    [`icon-${theme as ThemeProps}`]: true,
    [`${prefixCls}-loading`]: icon === 'spinner',
  });
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
