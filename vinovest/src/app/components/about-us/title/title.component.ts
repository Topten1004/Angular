import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  @Input() wineTitle : string = '';
  @Input() content : string = '';
  @Input() img_path : string = '';
  
  ngOnInit(): void {
  }

}
