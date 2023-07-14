import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HeaderLink_StateActive.module.css';

interface Props {
  className?: string;
}
/* @figmaId 34:389 */
export const HeaderLink_StateActive: FC<Props> = memo(function HeaderLink_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.unnamed}>#</div>
      <div className={classes.home}>home</div>
    </div>
  );
});
