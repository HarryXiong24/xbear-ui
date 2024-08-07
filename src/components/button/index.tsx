import classNames from 'classnames';
import Icon from '../Icon';
import { ButtonProps, ButtonSize, ButtonType } from './type';
import './style.scss';
import '@/styles/index.scss';

const prefixCls = 'xbear-btn';

export const Button = (props: ButtonProps) => {
  const {
    type = 'default',
    disabled = false,
    size = 'md',
    loading = false,
    circle = false,
    className = undefined,
    children = undefined,
    href = undefined,
    icon = undefined,
    theme = undefined,
    ...restProps
  } = props;

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type as ButtonType}`]: type,
    [`${prefixCls}-${size as ButtonSize}`]: size && !circle,
    [`${prefixCls}-circle-${size as ButtonSize}`]: size && circle,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-circle`]: !!circle,
    // 因为原生 a 标签里面没有 disabled 属性，所以对于 link 类型，我们手动实现 disabled 属性
    disabled: type === 'link' && disabled,
  });

  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else if (circle) {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        <Icon icon={icon!} theme={theme} style={{ width: '1rem', height: '1rem' }} />
      </button>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {loading ? (
          <Icon icon='spinner' theme={theme} style={{ marginRight: 5 }} />
        ) : icon ? (
          <Icon icon={icon} theme={theme} style={{ marginRight: 5 }} />
        ) : null}
        {children}
      </button>
    );
  }
};

export default Button;
