import { Component, OnInit } from '@angular/core';
import { HowitworksImgs } from 'src/app/static/home';
import { EachPortfolioItem , PortfolioList } from 'src/app/static/home';
// import AOS from 'aos';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  imgs : string[] = HowitworksImgs ;
  portfolioLists : EachPortfolioItem[] = PortfolioList ;
  intersectionData : number[] = [] ;
  maxIndex : number = 0 ;
  

  ngOnInit(): void {
    // AOS.init({ once : true });
    // AOS.refresh();
  }
  
  Intersecting (status: number, index: number) {
    
    this.intersectionData[index] = status;

    this.maxIndex  = this.intersectionData.reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0)

    // console.log( this.intersectionData );    
    // console.log( this.maxIndex , 'max Index')
    
  }  

}
