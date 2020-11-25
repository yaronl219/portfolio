const opusImg = require('../assets/imgs/opus.png')
const weatherImg = require('../assets/imgs/weather.png')
const snakeImg = require('../assets/imgs/snake.png')
const memeImg = require('../assets/imgs/memegen.png')
const avazonImg = require('../assets/imgs/avazon.png')
const taskyImg = require('../assets/imgs/tasky.png')
const cocktailMakerImg = require('../assets/imgs/cocktail-maker.png')

const canvasImg = require('../assets/imgs/html canvas.png')

export const dataService = {
    getTechStack,
    getProjects
}


function getProjects() {
    return [
        {
            title: 'Opus',
            img: opusImg,
            description: 'A trello like project, using web sockets for instant update between users. complete with a node.js powered backend, mongoDB as a database and Cloudinary for uploading images.',
            link: 'https://opus-sep20.herokuapp.com/',
            isDisplayed: true,
            tech: [
                { text: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png' },
                { text: 'Redux', logo: 'https://redux.js.org/img/redux.svg' },
                { text: 'NodeJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg' },
                { text: 'Websockets', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Html5_connectivity.svg' },
                { text: 'Material UI', logo: 'https://material-ui.com/static/logo_raw.svg' },
                { text: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' }
            ]
        },
        {
            title: 'Weather App',
            img: weatherImg,
            description: 'An app to display the weather using geolocation API, and storing favorites in the global state using Redux',
            link: 'https://yaronl219.github.io/weatherapp/',
            isDisplayed: false,
            tech: [
                { text: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png' },
                { text: 'Redux', logo: 'https://redux.js.org/img/redux.svg' },
                { text: 'Material UI', logo: 'https://material-ui.com/static/logo_raw.svg' },
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' }
            ]
        },
        {
            title: 'Cocktail Maker',
            img: cocktailMakerImg,
            description: 'An Angular 10 app, built to get better control over Angular. Backend built with node.js and REST API.',
            link: 'https://yaron-cocktail-maker.herokuapp.com/',
            isDisplayed: true,
            tech: [
                { text: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
                { text: 'Angular Material', logo: 'https://material.angular.io/assets/img/angular-material-logo.svg'},
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
                { text: 'NodeJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg' },
                { text: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' }
            ]
        },
        {
            title: 'Tasky',
            img: taskyImg,
            description: 'A super simple app in order to learn MobX and React Beautiful DnD. Also uses a node.js server and mongoDB to save users and tasks, and handle login.',
            link: 'https://tasky-yaron.herokuapp.com/',
            isDisplayed: true,
            tech: [
                { text: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png' },
                { text: 'MobX', logo: 'https://mobx.js.org/assets/mobx.png' },
                { text: 'Material UI', logo: 'https://material-ui.com/static/logo_raw.svg' },
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
                { text: 'NodeJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg' },
                { text: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' }
            ]
        },
        {
            title: 'MemeGen',
            img: memeImg,
            link: 'https://yaronl219.github.io/memegen/',
            isDisplayed: false,
            description: 'A basic project using vanilla JS & Canvas, creating memes and uploading and downloading images.',
            tech: [
                { text: 'Vanilla JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
                { text: 'Canvas', logo: canvasImg.default },
                { text: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
                { text: 'CSS', logo: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png' }
            ]
        },
        {
            title: 'Avazon',
            img: avazonImg,
            description: 'A simple CRUD app to master working with Vue.js and with Firebase realtime DB',
            link: 'https://yaronl219.github.io/avazon-vue/#/',
            isDisplayed: false,
            tech: [
                { text: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
                { text: 'Vuetify', logo: 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg' },
                { text: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png' },
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
            ]
        },
        {
            title: 'Snake',
            img: snakeImg,
            description: 'A fun one day project - creating a Snake game using Vanilla JS (working with keyboard only)',
            link: 'https://yaronl219.github.io/Snake/',
            isDisplayed: false,
            tech: [
                { text: 'Vanilla JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
                { text: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
                { text: 'CSS', logo: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png' },
                { text: 'SVG', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SVG_logo_h.svg' }
            ]
        },

    ]
}

function getTechStack() {

    return [
        {
            title: 'Frameworks',
            color: '#a40606',
            backgroundImg: 'linear-gradient(315deg, #a40606 0%, #d98324 74%)',
            content: [
                { text: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png' },
                { text: 'NodeJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg' },
                { text: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
                { text: 'Jquery', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg' },
                { text: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' }
            ]
        },
        {
            title: 'Languages',
            color: '#20bf55',
            backgroundImg: 'linear-gradient(315deg, #20bf55 0%, #01baef 74%)',
            content: [
                { text: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
                { text: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
                { text: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg' },
                { text: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
                { text: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg' },
                { text: 'SCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' }
            ]
        },
        {
            title: 'Programs',
            color: '#dbcbd8',
            backgroundImg: 'linear-gradient(316deg, #dbcbd8 0%, #2e4057 74%)',
            content: [
                { text: 'VScode', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
                { text: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
                { text: 'Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
                { text: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' },
                { text: 'Office & Excel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg' },
                { text: 'PowerBI', logo: 'https://cdn.visualbi.com/wp-content/uploads/power-bi-logo.png' },
            ]
        },
        {
            title: 'Services',
            color: '#fbb034',
            backgroundImg: 'linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)',
            content: [
                { text: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' },
                { text: 'Firebase', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png' },
                { text: 'Github', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg' },
                { text: 'Webflow', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Webflow_logo.svg' },
                { text: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
            ]
        }
    ]
}