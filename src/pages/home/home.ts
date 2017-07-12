import { CombUserInfo } from './../../models/CombUserInfo';
import { UserInfo } from './../../models/UserInfo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public combUserList: Array<CombUserInfo>;
  public combSelectedUserList: Array<CombUserInfo>;

  public simpleUserList: Array<UserInfo>;
  public simpleSelectedUserList: Array<UserInfo>;

  public
  constructor(public navCtrl: NavController, public http: Http) {
    this.combUserList = new Array<CombUserInfo>();
    this.combSelectedUserList = new Array<CombUserInfo>();

    this.simpleUserList = new Array<UserInfo>();
    this.simpleSelectedUserList = new Array<UserInfo>();

  }


  ionViewDidLoad() {
    //if place the initial method here, it works.
    this.setSimpleUserList();

    this.http.get("http://app.thepaper.cn/clt/jsp/v3/allNodes.jsp?type=4&WD-UUID=864819028898243").toPromise()
      .then(result => {
        //if place the initial method in a promise, it has error. ngModel can not bind correctly.
        this.setCombUserList();

      });
  }

  setCombUserList() {
    this.combUserList.push(new CombUserInfo(new UserInfo("Jim", "Beijing"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Andy", "Qingdao"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Cindy", "Shanghai"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Jack", "Guangzhou"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Tom", "Shenzhen"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Lily", "Qingdao"), new UserInfo("Jim2", "Beijing")));
    this.combUserList.push(new CombUserInfo(new UserInfo("Anderson", "Beijing"), new UserInfo("Jim2", "Beijing")));
    this.combSelectedUserList.push(new CombUserInfo(new UserInfo("Andy", "Qingdao"), new UserInfo("Jim2", "Beijing")));
    this.combSelectedUserList.push(new CombUserInfo(new UserInfo("Cindy", "Shanghai"), new UserInfo("Jim2", "Beijing")));
    this.combSelectedUserList.push(new CombUserInfo(new UserInfo("Jack", "Guangzhou"), new UserInfo("Jim2", "Beijing")));
    this.combSelectedUserList.push(new CombUserInfo(new UserInfo("Tom", "Shenzhen"), new UserInfo("Jim2", "Beijing")));
  }

  setSimpleUserList() {
    this.simpleUserList.push(new UserInfo("Jim", "Beijing"));
    this.simpleUserList.push(new UserInfo("Andy", "Qingdao"));
    this.simpleUserList.push(new UserInfo("Cindy", "Shanghai"));
    this.simpleUserList.push(new UserInfo("Jack", "Guangzhou"));
    this.simpleUserList.push(new UserInfo("Tom", "Shenzhen"));
    this.simpleUserList.push(new UserInfo("Lily", "Qingdao"));
    this.simpleUserList.push(new UserInfo("Anderson", "Beijing"));

    this.simpleSelectedUserList.push(new UserInfo("Andy", "Qingdao"));
    this.simpleSelectedUserList.push(new UserInfo("Cindy", "Shanghai"));
    this.simpleSelectedUserList.push(new UserInfo("Jack", "Guangzhou"));
    this.simpleSelectedUserList.push(new UserInfo("Tom", "Shenzhen"));

  }

  compareCombUser(e1: CombUserInfo, e2: CombUserInfo): boolean {
    return e1 && e2 ? e1.sourceUser.Name === e2.sourceUser.Name : e1 === e2;
  }

  compareSimpleUser(e1: UserInfo, e2: UserInfo): boolean {
    return e1 && e2 ? e1.Name === e2.Name : e1 === e2;
  }

}
