import { TechnologyModel } from '../models/technology.model';

export const Technologies = {
    frontend: [
        {
            name: 'angular',
            logo: 'assets/img/logos/angular.svg',
            tooltip: 'Angular',
            link: 'https://angular.io/'
        },
        {
            name: 'ionic',
            logo: 'assets/img/logos/ionic.svg',
            tooltip: 'Ionic',
            link: 'https://ionicframework.com/'
        },
        {
            name: 'sass',
            logo: 'assets/img/logos/sass.svg',
            tooltip: 'SASS',
            link: 'https://sass-lang.com/'
        },
        {
            name: 'cordova',
            logo: 'assets/img/logos/cordova.png',
            tooltip: 'Cordova',
            link: 'https://cordova.apache.org/'
        }
    ] as TechnologyModel[],
    backend: [
        {
            name: 'node',
            logo: 'assets/img/logos/node.png',
            tooltip: 'Node',
            link: 'https://nodejs.org/en/'
        },
        {
            name: 'docker',
            logo: 'assets/img/logos/docker.svg',
            tooltip: 'Docker',
            link: 'https://www.docker.com/'
        },
        {
            name: 'mongodb',
            logo: 'assets/img/logos/mongodb.svg',
            tooltip: 'Mongo DB',
            link: 'https://www.mongodb.com/en'
        },
        {
            name: 'java',
            logo: 'assets/img/logos/java.svg',
            tooltip: 'Java',
            link: 'https://java.com/en/'
        }
    ] as TechnologyModel[]
};
