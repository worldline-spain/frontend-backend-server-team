import { TechnologyModel } from '../models/technology.model';

export const Technologies = {
    frontend: [
        {
            name: 'angular',
            logo: 'assets/img/logos/angular.svg'
        },
        {
            name: 'ionic',
            logo: 'assets/img/logos/ionic.svg'
        },
        {
            name: 'sass',
            logo: 'assets/img/logos/sass.svg'
        },
        {
            name: 'cordova',
            logo: 'assets/img/logos/cordova.png'
        }
    ] as TechnologyModel[],
    backend: [
        {
            name: 'node',
            logo: 'assets/img/logos/node.png'
        },
        {
            name: 'docker',
            logo: 'assets/img/logos/docker.svg'
        },
        {
            name: 'mongodb',
            logo: 'assets/img/logos/mongodb.svg'
        },
        {
            name: 'java',
            logo: 'assets/img/logos/java.svg'
        }
    ] as TechnologyModel[]
};
