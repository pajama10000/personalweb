import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './H2.module.css';
import { Line7StrokeIcon } from './Line7StrokeIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    line7Stroke?: ReactNode;
  };
  text?: {
    projects?: ReactNode;
  };
}
/* @figmaId 23:987 */
export const H2: FC<Props> = memo(function H2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame26}>
        <div className={classes.unnamed}>#</div>
        {props.text?.projects != null ? props.text?.projects : <div className={classes.projects}>projects</div>}
      </div>
      <div className={classes.line7Stroke}>
        {props.swap?.line7Stroke || <Line7StrokeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
