import {SocialModel} from './social.model';

export interface MemberModel {
    name: string;
    photo: string;
    position: string;
    description: string;
    social: Array<SocialModel>;
}
