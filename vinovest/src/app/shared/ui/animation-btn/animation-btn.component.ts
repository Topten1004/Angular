import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-animation-btn',
  templateUrl: './animation-btn.component.html',
  styleUrls: ['./animation-btn.component.scss']
})
export class AnimationBtnComponent implements OnInit {

  constructor() { }
  
  hover : boolean = false ;
  @Input() label :string = '';
  @Input() onClick = (e :Event) => {} ;
  @Input() borderBtnColor : string = '';
  @Input() hoverBorderLabelColor : string = '' ;
  @Input() bgColor : string = '';
  @Input() fontColor : string = '';
  @Input() hoverBgColor : string = '';
  @Input() hoverFontColor : string = '' ;
  
  ngOnInit(): void {
  }

}
