import classnames from 'classnames';
import { CardProps } from './type';
import './style.scss';
import '@/styles/index.scss';

const prefixCls = 'xbear-card';

export const Card = (props: CardProps) => {
  const {
    shadow = false,
    showShadowWhenHover = false,
    titleOverflowHidden = true,
    title = undefined,
    cover = undefined,
    className = undefined,
    extra = undefined,
    style = undefined,
    actions = undefined,
    children = undefined,
    ...restProps
  } = props;

  return (
    <section
      className={classnames(prefixCls, className, {
        [`${prefixCls}-shadow`]: shadow,
        [`${prefixCls}-hover`]: showShadowWhenHover,
        [`${prefixCls}-cover`]: cover,
      })}
      style={style}
      {...restProps}
    >
      {(title || extra) && (
        <div className={classnames(`${prefixCls}-header`)}>
          {cover && (
            <div className={classnames(`${prefixCls}-header-cover`)}>
              <img src={cover} alt={title || cover} />
            </div>
          )}
          {title && (
            <div
              className={classnames(`${prefixCls}-header-title`, {
                [`${prefixCls}-header-title-overflow-hidden`]: titleOverflowHidden,
              })}
            >
              {title}
            </div>
          )}
          {extra && <div className={classnames(`${prefixCls}-header-extra`)}>{extra}</div>}
        </div>
      )}
      <div className={classnames(`${prefixCls}-content`)}>{children}</div>
      {actions && actions.length >= 1 && (
        <div className={classnames(`${prefixCls}-actions`)}>
          {actions.map((action, key) => (
            <div key={key} className={classnames(`${prefixCls}-actions-item`)} onClick={action.event}>
              {action.name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Card;
