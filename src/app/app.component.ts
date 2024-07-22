import { Component } from "@angular/core";
import { DataService } from "./Services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private dataService:DataService){}
  
  ngOninit():void{
  }
  
}

// @Component({
//   selector: 'menu-position-example',
//   templateUrl: 'menu-position-example.html',
// })
// export class MenuPositionExample {}
