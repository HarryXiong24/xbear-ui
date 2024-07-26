import { useImperativeHandle } from 'react';
import { TabItemProps } from './type';

const TabItem = (props: TabItemProps) => {
  const { children, myRef } = props;

  const showContent = () => {
    alert(children);
  };

  useImperativeHandle(myRef, () => ({
    showContent,
  }));

  return <>{children}</>;
};

export default TabItem;
