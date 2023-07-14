import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo_StyleOutline.module.css';
import { UnionIcon2 } from './UnionIcon2.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    union?: string;
    union2?: string;
    root?: string;
  };
  swap?: {
    union?: ReactNode;
    union2?: ReactNode;
  };
}
/* @figmaId 64:1296 */
export const Logo_StyleOutline: FC<Props> = memo(function Logo_StyleOutline(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.union || ''} ${classes.union}`}>
        {props.swap?.union || <UnionIcon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.union2 || ''} ${classes.union2}`}>
        {props.swap?.union2 || <UnionIcon2 className={classes.icon2} />}
      </div>
    </div>
  );
});
