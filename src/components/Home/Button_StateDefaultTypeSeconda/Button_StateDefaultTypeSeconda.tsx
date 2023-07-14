import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StateDefaultTypeSeconda.module.css';

interface Props {
  className?: string;
  text?: {
    demo?: ReactNode;
  };
}
/* @figmaId 9:112 */
export const Button_StateDefaultTypeSeconda: FC<Props> = memo(function Button_StateDefaultTypeSeconda(props = {}) {
  return (
    <button className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.demo != null ? props.text?.demo : <div className={classes.demo}>Demo |&gt;</div>}
    </button>
  );
});
