import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Block } from './Block/Block';
import { Button_StateDefaultTypePrimary } from './Button_StateDefaultTypePrimary/Button_StateDefaultTypePrimary';
import { Discord } from './Discord/Discord';
import { Dots } from './Dots/Dots';
import { Email } from './Email/Email';
import { Footer } from './Footer/Footer';
import { Frame22Icon2 } from './Frame22Icon2.js';
import { Frame22Icon3 } from './Frame22Icon3.js';
import { Frame22Icon4 } from './Frame22Icon4.js';
import { Frame22Icon5 } from './Frame22Icon5.js';
import { Frame22Icon } from './Frame22Icon.js';
import { Frame23Icon2 } from './Frame23Icon2.js';
import { Frame23Icon3 } from './Frame23Icon3.js';
import { Frame23Icon4 } from './Frame23Icon4.js';
import { Frame23Icon5 } from './Frame23Icon5.js';
import { Frame23Icon } from './Frame23Icon.js';
import { Frame24Icon2 } from './Frame24Icon2.js';
import { Frame24Icon3 } from './Frame24Icon3.js';
import { Frame24Icon4 } from './Frame24Icon4.js';
import { Frame24Icon5 } from './Frame24Icon5.js';
import { Frame24Icon } from './Frame24Icon.js';
import { Frame25Icon2 } from './Frame25Icon2.js';
import { Frame25Icon3 } from './Frame25Icon3.js';
import { Frame25Icon4 } from './Frame25Icon4.js';
import { Frame25Icon } from './Frame25Icon.js';
import { Frame26Icon2 } from './Frame26Icon2.js';
import { Frame26Icon3 } from './Frame26Icon3.js';
import { Frame26Icon4 } from './Frame26Icon4.js';
import { Frame26Icon5 } from './Frame26Icon5.js';
import { Frame26Icon } from './Frame26Icon.js';
import { Frame49Icon } from './Frame49Icon.js';
import { Frame50Icon } from './Frame50Icon.js';
import { H2 } from './H2/H2';
import { Header } from './Header/Header';
import classes from './Home.module.css';
import { Line7StrokeIcon2 } from './Line7StrokeIcon2.js';
import { Line7StrokeIcon3 } from './Line7StrokeIcon3.js';
import { Line7StrokeIcon4 } from './Line7StrokeIcon4.js';
import { Line7StrokeIcon } from './Line7StrokeIcon.js';
import { Linkedin } from './Linkedin/Linkedin';
import { Logo_StyleOutline } from './Logo_StyleOutline/Logo_StyleOutline';
import { LogoIcon } from './LogoIcon.js';
import { Media } from './Media/Media';
import { Media_StateDefault } from './Media_StateDefault/Media_StateDefault';
import { Project } from './Project/Project';
import { Twitter } from './Twitter/Twitter';
import { UnionIcon2 } from './UnionIcon2.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  hide?: {
    frame25?: boolean;
    java?: boolean;
    frame22?: boolean;
    frame23?: boolean;
    python?: boolean;
    javaScript?: boolean;
    lua?: boolean;
    lua2?: boolean;
    lua3?: boolean;
    javaScript2?: boolean;
    frame232?: boolean;
    python2?: boolean;
    javaScript3?: boolean;
    frame40?: boolean;
    hTML?: boolean;
    sCSS?: boolean;
    python3?: boolean;
    flask?: boolean;
    frame7?: boolean;
    kotlin?: boolean;
    frame72?: boolean;
  };
}
/* @figmaId 1:2 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Dots
        className={classes.frame31}
        swap={{
          frame22: <Frame22Icon className={classes.icon} />,
          frame23: <Frame23Icon className={classes.icon2} />,
          frame24: <Frame24Icon className={classes.icon3} />,
          frame25: <Frame25Icon className={classes.icon4} />,
          frame26: <Frame26Icon className={classes.icon5} />,
        }}
      />
      <Dots
        className={classes.frame36}
        swap={{
          frame22: <Frame22Icon2 className={classes.icon6} />,
          frame23: <Frame23Icon2 className={classes.icon7} />,
          frame24: <Frame24Icon2 className={classes.icon8} />,
          frame25: <Frame25Icon2 className={classes.icon9} />,
          frame26: <Frame26Icon2 className={classes.icon10} />,
        }}
      />
      <Dots className={classes.frame28} />
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle252}></div>
      <div className={classes.rectangle26}></div>
      <Footer />
      <H2
        className={classes.group28}
        swap={{
          line7Stroke: <Line7StrokeIcon className={classes.icon11} />,
        }}
        text={{
          projects: <div className={classes.projects}>contacts</div>,
        }}
      />
      <div className={classes.iMInterestedInFreelanceOpportu}>
        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to
        contact me
      </div>
      <div className={classes.frame33}>
        <div className={classes.messageMeHere}>Message me here</div>
        <div className={classes.frame32}>
          <Media_StateDefault
            swap={{
              twitter: <Discord className={classes.discord} />,
            }}
            text={{
              Elias: <div className={classes.Elias}>pajama10000</div>,
            }}
          />
          <Media_StateDefault
            swap={{
              twitter: <Email />,
            }}
            text={{
              Elias: <div className={classes.Elias2}>pajama@canadamc.org</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.iMPajamaJadenMedinaIAmAFulltim}>
        <div className={classes.textBlock}>
          I&#39;m pajama (Jaden Medina). I am a fulltime hihgschool student currently going into my freshman year
          studying Electronics, and Computer Science
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          I have come to realized that tall damands can only be fulfilled by capeable people. Much too often do you
          think of what those thoughts can be rather than trying to see what you can make them. Today expectation are
          only rising,
        </div>
        <div className={classes.textBlock4}>which is why ive put it amongst my self to try and meet those demands.</div>
        <div className={classes.textBlock5}>
          <p></p>
        </div>
        <div className={classes.textBlock6}>
          Within trying to meet those demands I have started to take place knowing HTML,Java, Kotlin, CSS &amp; Much
          more. I learned these because it takes one persons creativity to another exetent.
        </div>
        <div className={classes.textBlock7}>
          <p></p>
        </div>
        <div className={classes.textBlock8}>
          <p></p>
        </div>
      </div>
      <Button_StateDefaultTypePrimary
        className={classes.button}
        text={{
          live: <div className={classes.live}>Read more -&gt;</div>,
        }}
      />
      <H2
        className={classes.group27}
        swap={{
          line7Stroke: <Line7StrokeIcon2 className={classes.icon12} />,
        }}
        text={{
          projects: <div className={classes.projects2}>about-me</div>,
        }}
      />
      <div className={classes.image}></div>
      <Dots className={classes.frame29} />
      <Dots
        className={classes.frame30}
        swap={{
          frame22: <Frame22Icon3 className={classes.icon13} />,
          frame23: <Frame23Icon3 className={classes.icon14} />,
          frame24: <Frame24Icon3 className={classes.icon15} />,
          frame26: <Frame26Icon3 className={classes.icon16} />,
        }}
        hide={{
          frame25: true,
        }}
      />
      <div className={classes.line7Stroke}>
        <Line7StrokeIcon3 className={classes.icon30} />
      </div>
      <H2
        className={classes.group26}
        swap={{
          line7Stroke: <Line7StrokeIcon4 className={classes.icon17} />,
        }}
        text={{
          projects: <div className={classes.projects3}>skills</div>,
        }}
      />
      <Block />
      <Block
        className={classes.frame23}
        hide={{
          java: true,
          frame22: true,
        }}
        text={{
          languages: <div className={classes.languages}>Databases</div>,
          kotlin: <div className={classes.kotlin}>Velocity</div>,
        }}
      />
      <Block
        className={classes.frame24}
        classes={{ frame23: classes.frame232 }}
        hide={{
          frame23: false,
          python: false,
          javaScript: false,
        }}
        text={{
          languages: <div className={classes.languages2}>Frameworks</div>,
          kotlin: <div className={classes.kotlin2}>React</div>,
          javaScript: <div className={classes.javaScript}>Discord.js</div>,
          javaScript2: !props.hide?.javaScript && <div className={classes.javaScript2}>Boostrap</div>,
        }}
      />
      <Block
        className={classes.frame25}
        hide={{
          lua: false,
          lua2: false,
        }}
        text={{
          languages: <div className={classes.languages3}>Other</div>,
          kotlin: <div className={classes.kotlin3}>HTML</div>,
          java: <div className={classes.java}>CSS</div>,
          lua: !props.hide?.lua2 && <div className={classes.lua}>SCSS</div>,
        }}
      />
      <Block
        className={classes.frame26}
        classes={{ frame23: classes.frame233 }}
        hide={{
          lua2: false,
          javaScript2: false,
          frame23: false,
          python: false,
          javaScript: false,
        }}
        text={{
          languages: <div className={classes.languages4}>Tools</div>,
          kotlin: <div className={classes.kotlin4}>VSCode</div>,
          java: <div className={classes.java2}>IntelJ Ultimate</div>,
          gLSL: <div className={classes.gLSL}>Webstorm</div>,
          javaScript: <div className={classes.javaScript3}>Recalf</div>,
          python: !props.hide?.python2 && <div className={classes.python}>Git</div>,
          javaScript2: !props.hide?.javaScript3 && <div className={classes.javaScript4}>FileZilla</div>,
        }}
      />
      <Dots
        className={classes.frame27}
        swap={{
          frame22: <Frame22Icon4 className={classes.icon18} />,
          frame23: <Frame23Icon4 className={classes.icon19} />,
          frame24: <Frame24Icon4 className={classes.icon20} />,
          frame25: <Frame25Icon3 className={classes.icon21} />,
          frame26: <Frame26Icon4 className={classes.icon22} />,
        }}
      />
      <Dots
        className={classes.frame282}
        swap={{
          frame22: <Frame22Icon5 className={classes.icon23} />,
          frame23: <Frame23Icon5 className={classes.icon24} />,
          frame24: <Frame24Icon5 className={classes.icon25} />,
          frame25: <Frame25Icon4 className={classes.icon26} />,
          frame26: <Frame26Icon5 className={classes.icon27} />,
        }}
      />
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.logo2}>
        <LogoIcon className={classes.icon31} />
      </div>
      <div className={classes.frame5}>
        <Project />
        <Project
          className={classes.group3}
          classes={{ rectangle22: classes.rectangle22, frame40: classes.frame40 }}
          hide={{
            frame40: false,
            hTML: false,
            sCSS: false,
            python: false,
            flask: false,
            frame7: true,
          }}
          text={{
            hTML: <div className={classes.hTML}>Kotlin</div>,
            java: <div className={classes.java3}>HTML</div>,
            kotlin: <div className={classes.kotlin5}>discord.js</div>,
            azure: <div className={classes.azure}>canadamc</div>,
            minecraftNetwork: <div className={classes.minecraftNetwork}>Development Team</div>,
          }}
        />
        <Project
          classes={{ rectangle22: classes.rectangle222 }}
          hide={{
            kotlin: true,
            frame7: true,
          }}
          text={{
            hTML: <div className={classes.hTML2}>Kotlin</div>,
            azure: <div className={classes.azure2}>PvPHub</div>,
            minecraftNetwork: <div className={classes.minecraftNetwork2}>Former Executive</div>,
          }}
        />
      </div>
      <H2 />
      <div className={classes.viewAll}>View all ~~&gt;</div>
      <div className={classes.pajamaIsAWebDesignerAndFrontEn}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>pajama is a </span>
          <span className={classes.label2}>web designer</span>
          <span className={classes.label3}> and </span>
          <span className={classes.label4}>front-end developer</span>
        </p>
      </div>
      <div className={classes.heCraftsResponsiveWebsitesWher}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <Button_StateDefaultTypePrimary
        className={classes.button2}
        text={{
          live: <div className={classes.live2}>Contact me!!</div>,
        }}
      />
      <Logo_StyleOutline
        className={classes.logo}
        classes={{ union: classes.union, union2: classes.union2 }}
        swap={{
          union: (
            <div className={classes.union}>
              <UnionIcon className={classes.icon28} />
            </div>
          ),
          union2: (
            <div className={classes.union2}>
              <UnionIcon2 className={classes.icon29} />
            </div>
          ),
        }}
      />
      <div className={classes.image2}></div>
      <Dots className={classes.dots} />
      <div className={classes.frame58}>
        <div className={classes.rectangle27}></div>
        <div className={classes.currentlyWorkingOnCanadamc}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label5}>Currently working on </span>
            <span className={classes.label6}>canadamc</span>
          </p>
        </div>
      </div>
      <div className={classes.quote}>
        <div className={classes.iDontPlayTheOddsIPlayTheMan}>I dont play the odds, I play the man</div>
        <div className={classes.frame49}>
          <Frame49Icon className={classes.icon32} />
        </div>
        <div className={classes.frame492}>
          <div className={classes.HarveySpecter}>- Harvey Specter</div>
        </div>
        <div className={classes.frame50}>
          <Frame50Icon className={classes.icon33} />
        </div>
      </div>
      <div className={classes.frame61}>
        <Twitter />
      </div>
      <Linkedin />
      <Header
        className={classes.header}
        classes={{ group58: classes.group58 }}
        text={{
          elias: <div className={classes.elias}>Jaden</div>,
        }}
      />
      <Media />
    </div>
  );
});
