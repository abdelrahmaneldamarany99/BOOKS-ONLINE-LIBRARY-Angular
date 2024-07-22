import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// import { MaterialModule } from './material-module';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Components/home/home.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { AuthorDetailsComponent } from './Components/author-details/author-details.component';
import { SearchComponent } from './Components/search/search.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    BookDetailsComponent,
    AuthorDetailsComponent,
    SearchComponent,
    WishlistComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule
    // MaterialModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
