const opusImg = require('../assets/imgs/opus.png')
const weatherImg = require('../assets/imgs/weather.png')
const snakeImg = require('../assets/imgs/snake.png')
const memeImg = require('../assets/imgs/memegen.png')


export const dataService = {
    getTechStack,
    getProjects
}

function getProjects() {
    return [
        {
            title:'Opus',
            img: opusImg,
            description:'A trello like project, using web sockets for instant update between users. complete with a node.js powered backend, mongoDB as a database and Cloudinary for uploading images.',
            link: 'https://opus-sep20.herokuapp.com/',
            tech: [
                'React',
                'Redux',
                'Node.js',
                'Websockets',
                'Material UI',
                'MongoDB',
                'SCSS'
            ]
        },
        {
            title:'Weather App',
            img: weatherImg,
            description:'An app to display the weather using geolocation API, and storing favorites in the global state using Redux',
            link: 'https://yaronl219.github.io/weatherapp/',
            tech: [
                'React',
                'Redux',
                'Material UI',
                'SCSS'
            ]
        },
        {
            title:'MemeGen',
            img: memeImg,
            link: 'https://yaronl219.github.io/memegen/',
            description:'A basic project using vanilla JS & Canvas, creating memes and uploading and downloading images.',
            tech: [
                'Vanilla JS',
                'Canvas',
                'HTML5',
                'CSS'
            ]
        },
        // {
        //     title:'Snake',
        //     img: snakeImg,
        //     description:'A fun one day project - creating a Snake game using Vanilla JS',
        //     link: 'https://yaronl219.github.io/Snake/',
        //     tech: [
        //         'Vanilla JS',
        //         'HTML5',
        //         'CSS',
        //         'SVG'
        //     ]
        // },
    ]
}

function getTechStack() {
    
    return [
        {
            title: 'Languages',
            color: '#20bf55',
            backgroundImg: 'linear-gradient(315deg, #20bf55 0%, #01baef 74%)',
            content: [
                {text:'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'},
                {text:'Python', logo:'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg'},
                {text:'HTML5', logo:'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'},
                {text:'CSS', logo:'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg'},
                {text:'SCSS', logo:'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg'}
            ]
        },
        {
            title: 'Programs',
            color: '#dbcbd8',
            backgroundImg: 'linear-gradient(316deg, #dbcbd8 0%, #2e4057 74%)',
            content: [
                {text:'VScode', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'},
                {text:'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg'},
                {text:'Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'},
                {text:'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg'},
                {text:'Office & Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg'},
                {text:'PowerBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg'},
            ]
        },
        {
            title: 'Frameworks',
            color: '#a40606',
            backgroundImg: 'linear-gradient(315deg, #a40606 0%, #d98324 74%)',
            content: [
                {text:'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png'},
                {text:'NodeJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg'},
                {text:'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'},
                {text:'Jquery', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg'},
                {text:'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg'}
            ]
        },
        {
            title: 'Services',
            color: '#fbb034',
            backgroundImg: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
            content: [
                {text:'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg'},
                {text:'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png'},
                {text:'Github', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg'},
                {text:'Webflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg'},
                {text:'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'}
            ]
        }
    ]
}