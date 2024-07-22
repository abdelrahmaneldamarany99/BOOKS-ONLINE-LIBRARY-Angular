import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Interfaces/BookInterface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books!: Book[];
  error: Error | any
  constructor(private bookservise:DataService,private router:Router) {}

  ngOnInit(): void {
    this.fetchData()
  }
  
  fetchData() {
    this.bookservise.getData().subscribe(
      res=>{
      const withCover=res.works.filter((work: Book)=>work['cover_id'])
      const withoutCover=res.works.filter((work: Book)=>!work['cover_id']).slice(0,3)
      this.books=withCover.concat(withoutCover).map((book: any )=>{
        book.bookId= book.key.match(/\bOL.+/g).join('')
        return book
      })
    },
      error=>this.error=error
      )
  }
}