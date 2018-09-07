import {SocialModel} from './social.model';

export interface MemberModel {
    name: string;
    position: string;
    description: string;
    social: Array<SocialModel>;
}
