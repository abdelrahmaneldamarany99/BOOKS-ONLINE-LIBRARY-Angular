import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  error: Error | any

  constructor() { }

  ngOnInit(): void {
  }

}


// ,
//       error=>this.error=error