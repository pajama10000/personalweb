import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LanguageSwitcher_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    group58?: string;
  };
}
/* @figmaId 80:1562 */
export const LanguageSwitcher_StateDefault: FC<Props> = memo(function LanguageSwitcher_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.eN}>EN</div>
      <div className={`${props.classes?.group58 || ''} ${classes.group58}`}>
        <div className={classes.line14}></div>
        <div className={classes.line15}></div>
      </div>
      <div className={classes.frame59}>
        <div className={classes.rU}>RU</div>
        <div className={classes.uA}>UA</div>
      </div>
    </div>
  );
});
