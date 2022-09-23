import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss']
})
export class HistoryCardComponent implements OnInit {

  constructor() { }

  @Input() count_up : number = 0;
  @Input() historyNote : string = '' ;
  @Input() arrowUp_img : string = '' ;

  ngOnInit(): void {
  }

}
