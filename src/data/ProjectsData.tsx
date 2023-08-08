import reactSrc from '../assets/icon/react.png'
import reduxSrc from '../assets/icon/redux.png'
import typeScriptSrc from '../assets/icon/typeScript.png'
import jsSrc from '../assets/icon/javascriptSq.png'
import htmlSrc from '../assets/icon/html5.png'
import cssSrc from '../assets/icon/css.png'
import scssSrc from '../assets/icon/sass.png'
import portfolioSrc from '../assets/img/portfolio.jpg'
// import todoListSrc from '../assets/img/todoList.jpg'
import onlineStoreSrc from '../assets/img/onlineStore.jpg'
import tableManager from '../assets/img/table.jpg'
import quizCreator from '../assets/img/quiz.jpg'

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
        title: 'Website',
        projectLink: 'https://aleksandr-glebik.github.io/portfolio-JSFEPRESCHOOL/portfolio/',
        projectImg: portfolioSrc,
        technologies: [htmlSrc, cssSrc, jsSrc]
    },
    {
        id: 1,
        name: 'quizCreator',
        title: 'Quiz Creator',
        projectLink: 'https://aleksandr-glebik.github.io/react-quiz-fc/',
        projectImg: quizCreator,
        technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    },
    // {
    //     id: 1,
    //     name: 'todoList',
    //     title: 'Task Manager',
    //     projectLink: 'https://aleksandr-glebik.github.io/text-editor/',
    //     projectImg: todoListSrc,
    //     technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    // },
    {
        id: 2,
        name: 'onlineStore',
        title: 'Online Store',
        projectLink:  'https://Aleksandr-Glebik.github.io/react-pizza-v2',
        projectImg: onlineStoreSrc,
        technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    },
    {
        id: 3,
        name: 'tableManager',
        title: 'Table',
        projectLink:  'https://aleksandr-glebik.github.io/sector-business-test-task/',
        projectImg: tableManager,
        technologies: [reactSrc, reduxSrc, typeScriptSrc, htmlSrc, scssSrc]
    },
]