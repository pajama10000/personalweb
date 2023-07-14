import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Block.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    frame23?: string;
  };
  hide?: {
    java?: boolean;
    frame22?: boolean;
    frame23?: boolean;
    python?: boolean;
    javaScript?: boolean;
    lua?: boolean;
    lua2?: boolean;
    javaScript2?: boolean;
  };
  text?: {
    languages?: ReactNode;
    kotlin?: ReactNode;
    javaScript?: ReactNode;
    javaScript2?: ReactNode;
    java?: ReactNode;
    lua?: ReactNode;
    gLSL?: ReactNode;
    python?: ReactNode;
  };
}
/* @figmaId 23:533 */
export const Block: FC<Props> = memo(function Block(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame59}>
        {props.text?.languages != null ? props.text?.languages : <div className={classes.languages}>Languages</div>}
      </div>
      <div className={classes.line13}></div>
      <div className={classes.frame19}>
        <div className={classes.frame22}>
          {props.text?.kotlin != null ? props.text?.kotlin : <div className={classes.kotlin}>Kotlin</div>}
          {!props.hide?.java &&
            (props.text?.java != null ? props.text?.java : <div className={classes.java}>Java</div>)}
          {props.hide?.lua === false && <div className={classes.lua}>Lua</div>}
          {props.hide?.lua2 === false &&
            (props.text?.lua != null ? props.text?.lua : <div className={classes.lua2}>Lua</div>)}
        </div>
        {!props.hide?.frame22 && (
          <div className={classes.frame222}>
            {props.text?.gLSL != null ? props.text?.gLSL : <div className={classes.gLSL}>GLSL</div>}
            {props.text?.javaScript != null ? (
              props.text?.javaScript
            ) : (
              <div className={classes.javaScript}>JavaScript</div>
            )}
            {props.hide?.javaScript2 === false && <div className={classes.javaScript2}>JavaScript</div>}
          </div>
        )}
        {props.hide?.frame23 === false && (
          <div className={`${props.classes?.frame23 || ''} ${classes.frame23}`}>
            {props.hide?.python === false &&
              (props.text?.python != null ? props.text?.python : <div className={classes.python}>Python</div>)}
            {props.hide?.javaScript === false &&
              (props.text?.javaScript2 != null ? (
                props.text?.javaScript2
              ) : (
                <div className={classes.javaScript3}>JavaScript</div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
});
