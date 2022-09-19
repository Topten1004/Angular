import { Component, OnInit , Input } from '@angular/core';
import { Member } from 'src/app/page/about-us/members';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  @Input() questionTitle :string = '' ;
  @Input() title :string = '' ;
  @Input() content :string = '' ;
  @Input() team_members :Member[] = [] ;
  @Input() council_members :Member[] = [] ;
  
  arrow_img :string = '../../../../assets/arrow.svg';
  
  askTitle :string = 'Not sure which plan is best for you ?' ;
  tailTitle :string = 'Talk to a wine investing expert!' ;
  link :string = '/' ;
  font :string = 'Roslindaledisplaycondensed, sans-serif';
  
  
  ngOnInit(): void {
  }

}
