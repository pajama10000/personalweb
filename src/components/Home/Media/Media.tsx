import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Dribble } from '../Dribble/Dribble';
import { Figma } from '../Figma/Figma';
import { Github } from '../Github/Github';
import { Line10StrokeIcon } from './Line10StrokeIcon.js';
import classes from './Media.module.css';

interface Props {
  className?: string;
  hide?: {
    vector?: boolean;
    vector2?: boolean;
  };
}
/* @figmaId 230:1432 */
export const Media: FC<Props> = memo(function Media(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.line10Stroke}>
        <Line10StrokeIcon className={classes.icon} />
      </div>
      <div className={classes.frame16}>
        <Github className={classes.github} />
        <Dribble
          hide={{
            vector: true,
          }}
        />
        <Figma
          className={classes.figma}
          hide={{
            vector: true,
          }}
        />
      </div>
    </div>
  );
});
