import { Component, OnInit } from '@angular/core';
// import LOGO_IMG from '../../../../assets/logo.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logoImg_source : string  = '../../../../assets/logo.svg' ;
  
  menuItems : Array<any> = [
    {
      label : 'why wine',
      path : '/whywine',
    },
    {
      label : 'how it works',
      path : '/howitworks',
    },
    {
      label : 'marketplace',
      path : '/marketplace',
    },
    {
      label : 'whiskeyvest',
      path : '/whiskeyvest',
    },    
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
