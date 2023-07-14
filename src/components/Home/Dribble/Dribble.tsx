import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Dribble.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 162:1333 */
export const Dribble: FC<Props> = memo(function Dribble(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});
