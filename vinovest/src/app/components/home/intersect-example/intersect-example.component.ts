import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intersect-example',
  templateUrl: './intersect-example.component.html',
  styleUrls: ['./intersect-example.component.scss']
})
export class IntersectExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isIntersecting (status: boolean, index: number) {
    console.log('Element #' + index + ' is intersecting ' + status)
  }

}
