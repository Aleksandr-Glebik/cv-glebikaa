import reactSrc from '../assets/icon/react.png'
import reduxSrc from '../assets/icon/redux.png'
import typeScriptSrc from '../assets/icon/typeScript.png'
import jsSrc from '../assets/icon/javascriptSq.png'
import htmlSrc from '../assets/icon/html5.png'
import cssSrc from '../assets/icon/css.png'
import scssSrc from '../assets/icon/sass.png'
import portfolioSrc from '../assets/img/portfolio.jpg'
import todoListSrc from '../assets/img/todoList.jpg'
import OnlineStoreSrc from '../assets/img/onlineStore.jpg'

type projectsType = {
    id: number
    name: string
    title: string
    projectLink: string
    projectImg: string
    technologies: string[]
}

export const projectsList: projectsType[] = [
    {
        id: 0,
        name: 'portfolio',
        title: 'Portfolio',
        projectLink: 'https://aleksandr-glebik.github.io/portfolio-JSFEPRESCHOOL/portfolio/',
        projectImg: portfolioSrc,
        technologies: [htmlSrc, cssSrc, jsSrc]
    },
    {
        id: 1,
        name: 'todoList',
        title: 'Todo List',
        projectLink: 'https://aleksandr-glebik.github.io/text-editor/',
        projectImg: todoListSrc,
        technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    },
    {
        id: 2,
        name: 'onlineStore',
        title: 'Online Store',
        projectLink:  'https://Aleksandr-Glebik.github.io/react-pizza-v2',
        projectImg: OnlineStoreSrc,
        technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    },
]