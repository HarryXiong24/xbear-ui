import classNames from 'classnames';
import Icon from '../icon';
import { ButtonProps, ButtonSize, ButtonType } from './type';

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
    onMouseUp,
    ...restProps
  } = props;

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.currentTarget.blur(); // 鼠标点击后移除焦点
    onMouseUp && onMouseUp(event);
  };

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
      <button className={classes} disabled={disabled} {...restProps} onMouseUp={handleMouseUp}>
        <Icon icon={icon!} theme={theme} style={{ width: '1rem', height: '1rem' }} />
      </button>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps} onMouseUp={handleMouseUp}>
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
