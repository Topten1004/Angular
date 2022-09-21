import { Component, OnInit } from '@angular/core';
import { FooterMenuOneItem , FooterMenuItem } from 'src/app/static/footer/footerList';
import { RecentArticles } from 'src/app/static/footer/recentArticles';
import { FollowIcons , Icon } from 'src/app/static/footer/followIcons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerMenuItems : FooterMenuOneItem[] = FooterMenuItem ;
  recentArticles : FooterMenuOneItem[] = RecentArticles ;
  followIcons : Icon[] = FollowIcons ;

  woman_img : string = '../../../../assets/woman.png' ;
  BBB_img : string = '../../../../assets/BBB.png' ;
  appStore_img : string = '../../../../assets/appStore.svg' ;
  googlePlay_img : string = '../../../../assets/googlePlay.svg' ;

  ngOnInit(): void {
  }

}
