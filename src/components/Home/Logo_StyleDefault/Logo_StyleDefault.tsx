import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo_StyleDefault.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    union?: string;
    root?: string;
  };
  swap?: {
    union?: ReactNode;
  };
}
/* @figmaId 1:31 */
export const Logo_StyleDefault: FC<Props> = memo(function Logo_StyleDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.union || ''} ${classes.union}`}>
        {props.swap?.union || <UnionIcon className={classes.icon} />}
      </div>
    </div>
  );
});
