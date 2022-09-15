import { Component, OnInit } from '@angular/core';
import { TitleComponent } from 'src/app/components/about-us/title/title.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  header_title : string = "Democratizing Fine Wine Investing" ;
  header_content : string = "Fine wine has long been a cornerstone of wealth generation and preservation. The problem: historically, it’s been reserved for the ultra-wealthy. Vinovest is changing that." ;
  wine_img : string = '../../../assets/wineBackground.webp' ;

  ngOnInit(): void {
  }

}
