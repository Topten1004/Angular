import { Component, OnInit } from '@angular/core';
import { 
  HeroTitle , HeroContent , HeroContentList, CompanyLogos , Logo , RightWines_Img
} from 'src/app/static/home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title : string = HeroTitle ;
  content : string = HeroContent ;
  list : string[] = HeroContentList ;
  companyLogos : Logo[] = CompanyLogos ;
  
  rightWineImg : string = RightWines_Img ;


  ngOnInit(): void {
  }

}
