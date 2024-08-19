import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children?: ReactNode;
};

const Transition = (props: TransitionProps) => {
  const { children, animation, wrapper, unmountOnExit = true, appear = true, ...restProps } = props;
  return (
    <CSSTransition classNames={animation} unmountOnExit={unmountOnExit} appear={appear} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

export default Transition;
