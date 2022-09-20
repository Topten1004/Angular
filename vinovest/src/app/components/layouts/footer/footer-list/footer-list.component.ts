import { Component, OnInit , Input } from '@angular/core';
import { FooterMenuOneItem } from 'src/app/static/footer/footerList';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnInit {

  constructor() { }
  
  @Input() List : FooterMenuOneItem = {
    title : '',
    list : []
  } ;

  ngOnInit(): void {
  }

}
