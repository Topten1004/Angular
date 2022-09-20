import { Component, OnInit } from '@angular/core';
import { FooterMenuOneItem , FooterMenuItem } from 'src/app/static/footer/footerList';
import { RecentArticles } from 'src/app/static/footer/recentArticles';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  footerMenuItems : FooterMenuOneItem[] = FooterMenuItem ;
  recentArticles : FooterMenuOneItem[] = RecentArticles ;


  ngOnInit(): void {
  }

}
