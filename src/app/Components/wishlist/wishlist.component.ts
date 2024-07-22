import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  error: Error | any

  constructor() { }

  ngOnInit(): void {
  }

}

// ,
//       error=>this.error=error