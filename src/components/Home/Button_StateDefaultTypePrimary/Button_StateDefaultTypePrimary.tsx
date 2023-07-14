import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_StateDefaultTypePrimary.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    live?: ReactNode;
  };
}
/* @figmaId 7:31 */
export const Button_StateDefaultTypePrimary: FC<Props> = memo(function Button_StateDefaultTypePrimary(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      {props.text?.live != null ? props.text?.live : <div className={classes.live}>Live &lt;~&gt;</div>}
    </button>
  );
});
