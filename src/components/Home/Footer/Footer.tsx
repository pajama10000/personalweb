import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Discord } from '../Discord/Discord';
import { Figma } from '../Figma/Figma';
import { Github } from '../Github/Github';
import { Logo_StyleDefault } from '../Logo_StyleDefault/Logo_StyleDefault';
import classes from './Footer.module.css';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 34:374 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.line11}></div>
      <div className={classes.frame49}>
        <div className={classes.frame492}>
          <div className={classes.frame24}>
            <div className={classes.frame59}>
              <div className={classes.frame16}>
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
                <div className={classes.pajama}>pajama</div>
              </div>
              <div className={classes.pajamaCanadamcOrg}>pajama@canadamc.org</div>
            </div>
            <div className={classes.webDesignerAndFrontEndDevelope}>Web designer and front-end developer</div>
          </div>
          <div className={classes.frame23}>
            <div className={classes.media}>Media</div>
            <div className={classes.group22}>
              <Github className={classes.github} />
              <Figma
                className={classes.figma}
                hide={{
                  vector: true,
                }}
              />
              <Discord className={classes.discord} />
            </div>
          </div>
        </div>
        <div className={classes.Copyright2023MadeByJaden}>© Copyright 2023. Made by Jaden</div>
      </div>
    </div>
  );
});
