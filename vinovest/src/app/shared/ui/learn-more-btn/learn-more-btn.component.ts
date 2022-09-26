import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-learn-more-btn',
  templateUrl: './learn-more-btn.component.html',
  styleUrls: ['./learn-more-btn.component.scss']
})
export class LearnMoreBtnComponent implements OnInit {

  constructor() { }

  @Input() label : string = '' ;
  @Input() onClick = (e :Event) => {} ;

  ngOnInit(): void {
  }

}
