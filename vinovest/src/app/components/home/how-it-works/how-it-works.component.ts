import { Component, OnInit } from '@angular/core';
import { HowitworksImgs } from 'src/app/static/home';
import { EachPortfolioItem , PortfolioList } from 'src/app/static/home';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  imgs : string[] = HowitworksImgs ;
  portfolioLists : EachPortfolioItem[] = PortfolioList ;

  ngOnInit(): void {
  }

}
