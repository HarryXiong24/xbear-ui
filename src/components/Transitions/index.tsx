import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';

// interface TransitionProps extends CSSTransitionProps {
//   animation?: AnimationName,
//   wrapper? : boolean,
// }

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children?: ReactNode;
};

const Transition = (props: TransitionProps) => {
  const { children, animation, wrapper, ...restProps } = props;
  return (
    <CSSTransition classNames={animation} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
