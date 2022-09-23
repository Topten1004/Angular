import { Component, OnInit , Input } from '@angular/core';
import { Logo } from 'src/app/static/home';
import { WineHistory , WineHistoryType , ArrowUpImg } from 'src/app/static/home';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    @Input() title : string = '' ;
    @Input() content : string = '' ;
    @Input() list: string[] = [];
    @Input() companyLogos : Logo[] = [] ;

    @Input() rightWine_img : string = '' ;

    wineHistories : WineHistoryType[] = WineHistory ;

    countUp : number = WineHistory[0].percentage ;
    historyNote : string = WineHistory[0].history ;
    arrowUp_img : string = ArrowUpImg ;

    currentHistoryItem : number = -1 ;
    pause = false ;

    
    constructor( ) { }
    
    setIntervalFunction() {        
        const interval = setInterval(() => {
            if( this.pause ) {
                return ;
            } else {
                this.currentHistoryItem += 1 ;
            }
            if( this.currentHistoryItem > 4 ) 
                this.currentHistoryItem = 0;
        }, 5000)
    }

    ngOnInit(): void {    
        const timeOut = setTimeout(() => {
            this.currentHistoryItem = 0 ;
            this.setIntervalFunction();
        }, 2000) ;
    }  
    
    handleMouseOverHistoryCard( id : number ) {    
        this.pause = true ;
        this.currentHistoryItem = id ;
    }
    handleMouseOutHistoryCard() {
        this.pause = false ;    
    }

}
 