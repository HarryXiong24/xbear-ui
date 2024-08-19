import React, { useState } from 'react';
import classNames from 'classnames';
import { scopedClass } from '../../util/scoped-class';
import { TabsProps, TabItemProps } from './type';
import TabItem from './tab-item';
import { TabsComponent } from './type';

const prefixCls = 'xbear-tabs';
const scFunc = scopedClass(prefixCls); // 生成构造作用域函数

export const Tabs = (
  props: TabsProps & {
    Item: React.FC<TabItemProps>;
  }
) => {
  const { defaultIndex = 0, className = undefined, onSelect = undefined, type = 'line', children = undefined } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  // 点击 Tab 触发的事件
  const handleItemClick = (index: number, disabled: boolean) => {
    if (!disabled) {
      setActiveIndex(index);
      if (onSelect) {
        onSelect(index);
      }
    }
  };

  const classes = classNames('xbear-tabs', className);

  const navClass = classNames(scFunc('nav'), {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  // 渲染 Tab 标签
  const renderNavLinks = () => {
    // React.Children.map: 遍历 this.props.children，返回一个新的数组，每个子节点会通过一个回调函数进行处理。
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled = false } = childElement.props;
      const classes = classNames(scFunc('nav-item'), {
        'is-active': activeIndex === index,
        disabled: disabled,
      });

      return (
        <li
          role='presentation'
          key={`nav-item-${index}`}
          className={classes}
          onClick={() => {
            handleItemClick(index, disabled);
          }}
        >
          {label}
        </li>
      );
    });
  };

  // 渲染每个 Tab 里呈现的内容
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child;
      }
    });
  };

  return (
    <div className={classes}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className={scFunc('content')}>{renderContent()}</div>
    </div>
  );
};

(Tabs as TabsComponent).Item = TabItem;

export default Tabs as TabsComponent;
