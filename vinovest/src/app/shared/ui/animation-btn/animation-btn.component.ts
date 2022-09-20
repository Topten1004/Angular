import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-animation-btn',
  templateUrl: './animation-btn.component.html',
  styleUrls: ['./animation-btn.component.scss']
})
export class AnimationBtnComponent implements OnInit {

  constructor() { }
  
  @Input() label :string = '';
  @Input() onClick = (e :Event) => {} ;
  
  ngOnInit(): void {
  }

}
