import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/Interfaces/AuthorInterface';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})


export class AuthorDetailsComponent implements OnInit {
  author!: Author;
  error: Error | any


  constructor(private activatedRoute:ActivatedRoute,private bookService:DataService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAuthor(this.activatedRoute.snapshot.params.authorId).subscribe((res:any)=>{
      this.author=res.docs[0]
      console.log('this.author');
      console.log(this.author);
    },
      error=>this.error=error
    )

    console.log('this.activatedRoute:');
    console.log(this.activatedRoute);
  }

}

