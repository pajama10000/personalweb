import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { HeaderLink_StateActive } from '../HeaderLink_StateActive/HeaderLink_StateActive';
import { HeaderLink_StateDefault } from '../HeaderLink_StateDefault/HeaderLink_StateDefault';
import { LanguageSwitcher_StateDefault } from '../LanguageSwitcher_StateDefault/LanguageSwitcher_StateDefault';
import { Logo_StyleDefault } from '../Logo_StyleDefault/Logo_StyleDefault';
import classes from './Header.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  classes?: {
    group58?: string;
    root?: string;
  };
  text?: {
    elias?: ReactNode;
  };
}
/* @figmaId 33:267 */
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame40}>
        <Logo_StyleDefault
          className={classes.logo}
          classes={{ union: classes.union }}
          swap={{
            union: (
              <div className={classes.union}>
                <UnionIcon className={classes.icon} />
              </div>
            ),
          }}
        />
        {props.text?.elias != null ? props.text?.elias : <div className={classes.elias}>Elias</div>}
      </div>
      <div className={classes.frame1}>
        <HeaderLink_StateActive />
        <HeaderLink_StateDefault
          text={{
            home: <div className={classes.home}>works</div>,
          }}
        />
        <HeaderLink_StateDefault
          text={{
            home: <div className={classes.home2}>about-me</div>,
          }}
        />
        <HeaderLink_StateDefault
          text={{
            home: <div className={classes.home3}>contacts</div>,
          }}
        />
        <LanguageSwitcher_StateDefault classes={{ group58: `${props.classes?.group58 || ''} ${classes.group58}` }} />
      </div>
    </div>
  );
});
