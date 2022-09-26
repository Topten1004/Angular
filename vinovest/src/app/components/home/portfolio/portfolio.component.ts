import { Component, OnInit } from '@angular/core';
import { EachPortfolio , Portfolio } from 'src/app/static/home';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  portfolios : EachPortfolio[] = Portfolio ;
  btnLabel : string = 'learn more';

  ngOnInit(): void {
  }

}
