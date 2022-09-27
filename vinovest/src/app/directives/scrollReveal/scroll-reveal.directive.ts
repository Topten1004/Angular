import { Directive , OnDestroy , Input, Output , EventEmitter ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  exportAs: 'useScrollReveal',
})
export class ScrollRevealDirective implements OnDestroy {

  hasRevealed : boolean = false;

  constructor( private element : ElementRef ) { 
    this.checkReveal() ;
  }

  ngOnDestroy () {
    window.removeEventListener("scroll", this.onWindowScroll);
  }


  checkReveal() {
    if( !this.hasRevealed ) {      
      window.addEventListener("scroll" , this.onWindowScroll );
    }
  }

  onWindowScroll() {
    const { clientHeight } = this.element.nativeElement;
    const { top } = this.element.nativeElement.getBoundingClientRect();

    if ( top - window.innerHeight <=0 && top + clientHeight > 0 ) {
      this.hasRevealed = true;
    }
  }


}
