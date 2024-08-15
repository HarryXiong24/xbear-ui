import { useImperativeHandle } from 'react';
import { TabItemProps } from './type';

const TabItem = (props: TabItemProps) => {
  const { children = undefined, myRef = undefined } = props;

  // test useImperativeHandle
  const showContent = () => {
    alert(children);
  };

  useImperativeHandle(myRef, () => ({
    showContent,
  }));

  return <>{children}</>;
};

export default TabItem;
