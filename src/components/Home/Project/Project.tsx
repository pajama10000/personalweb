import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_StateDefaultTypePrimary } from '../Button_StateDefaultTypePrimary/Button_StateDefaultTypePrimary';
import { Button_StateDefaultTypeSeconda } from '../Button_StateDefaultTypeSeconda/Button_StateDefaultTypeSeconda';
import classes from './Project.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle22?: string;
    frame40?: string;
    root?: string;
  };
  hide?: {
    frame40?: boolean;
    hTML?: boolean;
    sCSS?: boolean;
    python?: boolean;
    flask?: boolean;
    frame7?: boolean;
    kotlin?: boolean;
  };
  text?: {
    hTML?: ReactNode;
    java?: ReactNode;
    kotlin?: ReactNode;
    azure?: ReactNode;
    minecraftNetwork?: ReactNode;
  };
}
/* @figmaId 6:21 */
export const Project: FC<Props> = memo(function Project(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle22 || ''} ${classes.rectangle22}`}></div>
      <div className={classes.frame39}>
        {props.text?.hTML != null ? props.text?.hTML : <div className={classes.hTML}>HTML</div>}
        {props.text?.java != null ? props.text?.java : <div className={classes.java}>Java</div>}
        <div className={classes.python}>Python</div>
        {!props.hide?.kotlin &&
          (props.text?.kotlin != null ? props.text?.kotlin : <div className={classes.kotlin}>Kotlin</div>)}
      </div>
      {props.hide?.frame40 === false && (
        <div className={`${props.classes?.frame40 || ''} ${classes.frame40}`}>
          {props.hide?.hTML === false && <div className={classes.hTML2}>HTML</div>}
          {props.hide?.sCSS === false && <div className={classes.sCSS}>SCSS</div>}
          {props.hide?.python === false && <div className={classes.python2}>Python</div>}
          {props.hide?.flask === false && <div className={classes.flask}>Flask</div>}
        </div>
      )}
      <div className={classes.frame3}>
        {props.text?.azure != null ? props.text?.azure : <div className={classes.azure}>Azure</div>}
        {props.text?.minecraftNetwork != null ? (
          props.text?.minecraftNetwork
        ) : (
          <div className={classes.minecraftNetwork}>Minecraft Network</div>
        )}
        <div className={classes.frame5}>
          <Button_StateDefaultTypePrimary
            className={classes.frame6}
            text={{
              live: <div className={classes.live}>Discord</div>,
            }}
          />
          {!props.hide?.frame7 && (
            <Button_StateDefaultTypeSeconda
              text={{
                demo: <div className={classes.demo}>GitHub</div>,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
});
