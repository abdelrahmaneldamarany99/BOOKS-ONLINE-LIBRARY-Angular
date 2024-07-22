import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Interfaces/BookInterface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book!: Book;
  error: Error | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.bookService.getData().subscribe((res) => {
      const withCover = res.works.filter((work: Book) => work['cover_id']);
      const withoutCover = res.works
        .filter((work: Book) => !work['cover_id'])
        .slice(0, 3);
      this.book = withCover
        .concat(withoutCover)
        .find(
          (b: Book) =>
            this.activatedRoute.snapshot.params.bookId === b.key.match(/\bOL.+/g)?.join('')
        );
    },
    (err)=>{
      this.error=err
    }
    );
  }
}
