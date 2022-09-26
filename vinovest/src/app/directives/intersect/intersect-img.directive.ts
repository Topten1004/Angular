import {
    Directive,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ElementRef,
  } from '@angular/core'
  import { debounceTime, Observable, Subscription } from 'rxjs';

  import { range } from "lodash";
  

  
@Directive({
    selector: '[appIntersectImg]',
    exportAs: 'intersection',
  })

export class IntersectImgDirective implements OnDestroy {

    getThreshold() {
        return range(100).map((i) => i/100) ;
    }

    @Input() root: HTMLElement | null = null
    @Input() rootMargin = '0px 0px 0px 0px'
    @Input() threshold = this.getThreshold()
    @Input() debounceTime = 100
    @Input() isContinuous = false
  
    @Output() isIntersecting = new EventEmitter<number>()
  
    _isIntersecting : number = 0
    subscription: Subscription
  
    constructor (private element: ElementRef) {
        this.subscription = this.createAndObserve()
    }
  
    ngOnDestroy () {
        this.subscription.unsubscribe()
    }
  
    createAndObserve () {
        const options: IntersectionObserverInit = {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold,
        }
  
        return new Observable<number>(subscriber => {

            const intersectionObserver = new IntersectionObserver(entries => {

                const { intersectionRatio } = entries[0];
                
                subscriber.next(intersectionRatio);
                
        
                intersectionRatio && !this.isContinuous && intersectionObserver.disconnect();

            }, options)
  
            intersectionObserver.observe(this.element.nativeElement)
  
            return {
                unsubscribe () {
                    intersectionObserver.disconnect()
                },
            }
        })
        .pipe(debounceTime(this.debounceTime))
        .subscribe(status => {            
            this.isIntersecting.emit(status)
            this._isIntersecting = status
        })
    }
  }
  