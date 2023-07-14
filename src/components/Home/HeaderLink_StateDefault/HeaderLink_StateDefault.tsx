import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './HeaderLink_StateDefault.module.css';

interface Props {
  className?: string;
  text?: {
    home?: ReactNode;
  };
}
/* @figmaId 34:386 */
export const HeaderLink_StateDefault: FC<Props> = memo(function HeaderLink_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.unnamed}>#</div>
      {props.text?.home != null ? props.text?.home : <div className={classes.home}>home</div>}
    </div>
  );
});
