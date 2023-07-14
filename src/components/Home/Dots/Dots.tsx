import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Dots.module.css';
import { Frame22Icon } from './Frame22Icon.js';
import { Frame23Icon } from './Frame23Icon.js';
import { Frame24Icon } from './Frame24Icon.js';
import { Frame25Icon } from './Frame25Icon.js';
import { Frame26Icon } from './Frame26Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    frame22?: ReactNode;
    frame23?: ReactNode;
    frame24?: ReactNode;
    frame25?: ReactNode;
    frame26?: ReactNode;
  };
  hide?: {
    frame25?: boolean;
  };
}
/* @figmaId 23:751 */
export const Dots: FC<Props> = memo(function Dots(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame22}>{props.swap?.frame22 || <Frame22Icon className={classes.icon} />}</div>
      <div className={classes.frame23}>{props.swap?.frame23 || <Frame23Icon className={classes.icon2} />}</div>
      <div className={classes.frame24}>{props.swap?.frame24 || <Frame24Icon className={classes.icon3} />}</div>
      {!props.hide?.frame25 && (
        <div className={classes.frame25}>{props.swap?.frame25 || <Frame25Icon className={classes.icon4} />}</div>
      )}
      <div className={classes.frame26}>{props.swap?.frame26 || <Frame26Icon className={classes.icon5} />}</div>
    </div>
  );
});
