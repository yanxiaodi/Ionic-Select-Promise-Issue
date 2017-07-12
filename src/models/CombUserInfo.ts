import { UserInfo } from './UserInfo';
export class CombUserInfo {
    public sourceUser: UserInfo;
    public targetUser: UserInfo;
    constructor(source: UserInfo, target: UserInfo) {
        this.sourceUser = source;
        this.targetUser = target;
    }
}