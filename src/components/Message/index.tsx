import React from 'react';
import ReactDOM from 'react-dom/client';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import Icon from '../icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeProps } from '../icon/type';
import { IconType, MessageComponentProps, MessageType, MessageProps } from './type';
import './style.scss';
import '@/styles/index.scss';

// 获取对应的图标类型
const getIconType = (icon_type: string) => {
  switch (icon_type) {
    case IconType.SUCCESS:
      return { icon: 'check-circle', theme: 'success' };
    case IconType.INFO:
      return { icon: 'info-circle', theme: 'primary' };
    case IconType.WARNING:
      return { icon: 'exclamation-circle', theme: 'warning' };
    case IconType.LOADING:
      return { icon: 'spinner', theme: 'primary' };
    case IconType.ERROR:
      return { icon: 'times-circle', theme: 'danger' };
    default:
      return { icon: 'check-circle', theme: 'success' };
  }
};

export function Message(props: MessageProps) {
  const prefixCls = 'xbear-message';
  const { visible, children = undefined, icon = undefined, theme = undefined, type = 'info' } = props;

  // 返回的渲染元素
  const result = (
    <div className={`${prefixCls}`}>
      <div
        className={classNames(`${prefixCls}-wrapper`, {
          [`${prefixCls}-open`]: visible,
          [`${prefixCls}-close`]: !visible,
        })}
      >
        <div className={classNames(`${prefixCls}-content`)}>
          {icon ? (
            <Icon icon={icon} theme={theme} style={{ marginRight: 8 }} />
          ) : (
            <Icon
              icon={getIconType(type).icon as IconProp}
              theme={getIconType(type).theme as ThemeProps}
              style={{ marginRight: 8 }}
            />
          )}
          <span>{children}</span>
        </div>
      </div>
    </div>
  );

  /**
   * Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案
   * ReactDOM.createPortal(child, container)
   * 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment
   * 第二个参数（container）是一个 DOM 元素。
   */
  // 将 result 渲染在 document.body 上
  return createPortal(result, document.body);
}

// 渲染 Message 的函数
const renderELement = (type: MessageType, props: MessageComponentProps) => {
  const { onClose, duration = 1, content, icon } = props;

  // prepare dom
  const wrapDiv = document.createElement('div');
  const MessageComponent = (
    <Message visible icon={icon} type={type}>
      {content}
    </Message>
  );
  const root = ReactDOM.createRoot(wrapDiv);

  // 关闭 Message
  const close = () => {
    root.render(React.cloneElement(MessageComponent, { visible: false })); // 隐藏
    setTimeout(() => {
      root.unmount(); // 销毁
      wrapDiv.remove(); // 移除
      onClose && onClose(); // 执行 onClose 回调
    }, 500); // 等待动画执行完再销毁
  };

  root.render(MessageComponent);

  return new Promise((resolve) => {
    setTimeout(() => {
      close(); // 关闭
      return resolve(null);
    }, duration * 1000);
  });
};

Message.success = (props: MessageComponentProps) => {
  return renderELement('success', props);
};

Message.info = (props: MessageComponentProps) => {
  return renderELement('info', props);
};

Message.warning = (props: MessageComponentProps) => {
  return renderELement('warning', props);
};

Message.loading = (props: MessageComponentProps) => {
  return renderELement('loading', props);
};

Message.error = (props: MessageComponentProps) => {
  return renderELement('error', props);
};

export default Message;
