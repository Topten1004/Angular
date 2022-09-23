import { Location } from '@angular/common';
import { Component, OnInit , HostListener , Input } from '@angular/core';
import { MenuItem , MainMenuItems } from 'src/app/static/header/mainHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  mainColor : string = '' ;
  loginColor : string = '' ;

  logoImg_source : string  = '../../../../assets/logo.svg' ;
  logoImg_light : string = '../../../../assets/logo_light.svg' ;    
  isScrollDown : boolean = false ;  

  logo_transparent : string = this.logoImg_light ;
  logo_white : string = this.logoImg_source ;
  event$ ;

  menuItems : MenuItem[] = MainMenuItems ;

  @HostListener('window:scroll', ['$event']) onScroll ( event :Event) : void {
    let YOffset :number = window.pageYOffset ;
    if ( YOffset < 5 ) {
      this.isScrollDown = false ;
    } else {
      this.isScrollDown = true
    }
  }  

  constructor( location : Location) {
    this.event$ = location.onUrlChange( (val) => {      
      if( val === '/') {
        this.mainColor = 'rgb(239, 221, 199)' ;
      }
      if( val.includes('about-us') ) {
        this.logo_transparent = this.logoImg_source ;
      }
    })
  }
  
  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }  
}

