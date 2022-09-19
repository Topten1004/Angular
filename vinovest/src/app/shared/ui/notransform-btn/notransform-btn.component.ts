import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-notransform-btn',
  templateUrl: './notransform-btn.component.html',
  styleUrls: ['./notransform-btn.component.scss']
})
export class NotransformBtnComponent implements OnInit {

  constructor() { }

  @Input() askTitle :string = '' ;
  @Input() tailTitle :string = '' ;
  @Input() tail_img_path :string = '' ;
  @Input() width :string = '' ;
  @Input() font :string = '' ;


  ngOnInit(): void {
  }

}
