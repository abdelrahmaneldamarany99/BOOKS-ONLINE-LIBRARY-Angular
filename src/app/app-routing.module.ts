import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { AuthorDetailsComponent } from './Components/author-details/author-details.component';

const routes: Routes = [
  {path:"",redirectTo:'/home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"book-details/:bookId", component:BookDetailsComponent},
  {path:"author-details/:authorId", component:AuthorDetailsComponent},
  {path:"search", component:SearchComponent},
  {path:"wishlist", component:WishlistComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
