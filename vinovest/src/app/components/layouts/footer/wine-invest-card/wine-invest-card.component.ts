import { Component, OnInit , Input } from '@angular/core';


@Component({
  selector: 'app-wine-invest-card',
  templateUrl: './wine-invest-card.component.html',
  styleUrls: ['./wine-invest-card.component.scss']
})
export class WineInvestCardComponent implements OnInit {

  constructor() { }

  label :string = 'get started';
  onAnimationBtnClick = (e :any) => {        
    console.log(e.target.innerHTML);
  };
  startWine_img :string = '../../../../../assets/start_wine.svg';
  endWine_img :string = '../../../../../assets/end_wine.svg'

  ngOnInit(): void {
  }

}
