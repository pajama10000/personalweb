import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Twitter } from '../Twitter/Twitter';
import classes from './Media_StateDefault.module.css';

interface Props {
  className?: string;
  swap?: {
    twitter?: ReactNode;
  };
  text?: {
    Elias?: ReactNode;
  };
}
/* @figmaId 29:315 */
export const Media_StateDefault: FC<Props> = memo(function Media_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.swap?.twitter || <Twitter />}
      {props.text?.Elias != null ? props.text?.Elias : <div className={classes.Elias}>@elias</div>}
    </div>
  );
});
