import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Figma.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 158:1352 */
export const Figma: FC<Props> = memo(function Figma(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});
