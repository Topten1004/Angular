import { Location } from '@angular/common';
import { Component, OnInit , HostListener } from '@angular/core';
import { MenuItem , MainMenuItems } from 'src/app/static/header/mainHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  logoImg_source : string  = '../../../../assets/logo.svg' ;
  logoImg_light : string = '../../../../assets/logo_light.svg' ;    
  isScrollDown : boolean = false ;  

  menuItems : MenuItem[] = MainMenuItems ;

  @HostListener('window:scroll', ['$event']) onScroll ( event :Event) : void {
    let YOffset :number = window.pageYOffset ;
    if ( YOffset < 5 ) {
      this.isScrollDown = false ;
    } else {
      this.isScrollDown = true
    }
  }  

  logo_transparent : string = this.logoImg_source ;
  logo_white : string = this.logoImg_source ;
 
  event$ ;
  
  constructor( location : Location) {
    this.event$ = location.onUrlChange( (val) => {      
      if( val.includes('about-us') ) {
        this.logo_transparent = this.logoImg_light ;
      }
    })
  }
  

  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }  
}

