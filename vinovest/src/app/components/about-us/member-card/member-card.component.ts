import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  constructor() { }

  @Input() img :string = '';
  @Input() name :string = '';
  @Input() position :string = '';
  @Input() desc :string = '';

  ngOnInit(): void {
  }

}
