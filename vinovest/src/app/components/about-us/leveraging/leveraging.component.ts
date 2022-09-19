import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-leveraging',
  templateUrl: './leveraging.component.html',
  styleUrls: ['./leveraging.component.scss']
})
export class LeveragingComponent implements OnInit {

  @Input() title :string = '';
  @Input() content :string = '';
  @Input() img :string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
