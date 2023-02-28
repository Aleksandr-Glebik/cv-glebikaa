import reactSrc from '../assets/icon/react.png'
import reduxSrc from '../assets/icon/redux.png'
import typeScriptSrc from '../assets/icon/typeScript.png'
import jsSrc from '../assets/icon/js.png'
import htmlSrc from '../assets/icon/html.png'
import cssSrc from '../assets/icon/css.png'
import scssSrc from '../assets/icon/sass.png'
import webPackSrc from '../assets/icon/webpack.png'
import gitSrc from '../assets/icon/githubWhite.png'
import figmaSrc from '../assets/icon/figma.png'

type skillItemType = {
    id: number
    name: string
    path: string
    text: string
}

export const skillsList: skillItemType[] = [
    {
      id: 0,
      name: 'react',
      path: reactSrc,
      text: 'React'
    },
    {
      id: 1,
      name: 'redux',
      path: reduxSrc,
      text: 'Redux'
    },
    {
      id: 2,
      name: 'typescript',
      path: typeScriptSrc,
      text: 'TypeScript'
    },
    {
      id: 3,
      name: 'javascript',
      path: jsSrc,
      text: 'JavaScript'
    },
    {
      id: 4,
      name: 'html',
      path: htmlSrc,
      text: 'HTML'
    },
    {
      id: 5,
      name: 'css',
      path: cssSrc,
      text: 'CSS'
    },
    {
      id: 6,
      name: 'sass',
      path: scssSrc,
      text: 'Sass'
    },
    {
      id: 7,
      name: 'webpack',
      path: webPackSrc,
      text: 'WebPack'
    },
    {
      id: 9,
      name: 'github',
      path: gitSrc,
      text: 'Git'
    },
    {
      id: 9,
      name: 'figma',
      path: figmaSrc,
      text: 'Figma'
    },
  ]