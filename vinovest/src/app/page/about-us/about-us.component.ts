import { Component, OnInit } from '@angular/core';
import { team_members , council_members , Member } from './members';

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

  leveraging_title :string = "Leveraging technology to provide access to all" ;
  lerveraging_content :string = "Vinovest is democratizing fine wine investing, providing clients with unparalleled access, liquidity, and transparency. Our combination of wine and technology experts makes it possible for everyday investors to own blue-chip wines from Burgundy, Bordeaux, and beyond. With our easy-to-use platform and team of portfolio advisors, you can have your profits and drink them, too";
  leveraging_img :string = '../../../assets/leveraging.svg' ;

  team_questionTitle :string = "who are we?" ;
  team_title :string = "Vinovest is a team of world-class wine experts and the best technology talent." ;
  team_content :string = "Our talented team of experienced operators, software engineers, designers, and data scientists have previously started, scaled and sold several venture-backed companies.";
  team_members :Member[] = team_members ;
  council_members :Member[] = council_members ;



  ngOnInit(): void {
  }

}

