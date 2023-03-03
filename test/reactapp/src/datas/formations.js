import Csharp from '../datas/img/logos/logo-csharp.png';
import VueJs from '../datas/img/logos/logo-vuejs.png';
import SEO from '../datas/img/logos/logo-seo-premium.png';
import JavaScript from '../datas/img/logos/logo-js.png';
import HTML from '../datas/img/logos/logo-html-css.png';
import Git from '../datas/img/logos/logo-git.png';
import Sass from '../datas/img/logos/logo-sass.png';
import ReactLogo from '../datas/img/logos/logo-react.png';
import Angular from '../datas/img/logos/logo-angular.png';



export const formations = [
    {
        id: 1,
        category: "Reférencement",
        name: "SEO Premium",
        difficulte: 3,
        price: 249,
        created: "2019-06-16T16:54:46.308Z",
        image: <img className='logo' src={SEO} alt='logoSEO' />,
        durée: 30,
        sessions: "02/01/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 5,
        certification : "Oui"
    },
    {
        id: 2,
        category: "Langage de programmation",
        name: "C#",
        difficulte: 4,
        price: 299,
        created: "2019-06-16T16:54:56.308Z",
        image: <img className='logo' src={Csharp} alt='logoCsharp' />,
        durée: 60,
        sessions: "04/04/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note: 7,
        certification : "Non"

    },
    {
        id: 3,
        category: "Langage de programmation",
        name: "JavaScript",
        difficulte: 3,
        price: 199,
        created: "2019-06-16T16:55:06.308Z",
        image: <img className='logo' src={JavaScript} alt='logoJS' />,
        durée: 90,
        sessions: "12/01/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 9,
        certification : "Non"
    },
    {
        id: 4,
        category: "Langage de programmation",
        name: "HTML/CSS",
        difficulte: 2,
        price: 149,
        created: "2019-06-16T16:55:16.308Z",
        image: <img className='logo' src={HTML} alt='logoHTML' />,
        durée: 120,
        sessions: "20/10/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 6,
        certification : "Oui"
    },
    {
        id: 5,
        category: "FrameWork",
        name: "React",
        difficulte: 3,
        price: 299,
        created: "2019-06-16T16:55:26.308Z",
        image: <img className='logo' src={ReactLogo} alt='logoreact' />,
        durée: 50,
        sessions: "09/05/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 10,
        certification : "Oui"
    },
    {
    id: 6,
        category: "FrameWork",
        name: "Vue.Js",
        difficulte: 2,
        price: 299,
        created: "2019-06-16T16:55:36.308Z",
        image: <img className='logo' src={VueJs} alt='LogoVue' />,
        durée: 60,
        sessions: "20/12/2022",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note :3,
        certification : "Non"
    },
    {
        id: 7,
        category: "FrameWork",
        name: "Angular",
        difficulte: 4,
        price: 299,
        created: "2019-06-16T16:55:46.308Z",
        image: <img className='logo' src={Angular} alt='logoAngular' />,
        durée: 90,
        sessions: "03/01/2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        lieux : "80 rue boule jiminy 59800 Lille",
        note : 7,
        certification : "Oui"
    },
    {
        id: 8,
        category: "Outils collaboratifs",
        name: "Git",
        difficulte: 3,
        price: 199,
        created: "2019-06-16T16:55:56.308Z",
        image: <img className='logo' src={Git} alt='logoGit' />,
        durée: 180,
        sessions: "20/02/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 8,
        certification : "Non"
    },
    {
        id: 9,
        category: "FrameWork",
        name: "Sass",
        difficulte: 3,
        price: 149,
        created: "2019-06-16T16:56:06.308Z",
        image: <img className='logo' src={Sass} alt='logoSass' />,
        durée: 180,
        sessions: "10/07/2023",
        lieux : "80 rue boule jiminy 59800 Lille",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo rhoncus ligula.",
        note : 2,
        certification : "Non"
    }
]