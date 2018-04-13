import { Component } from '@angular/core';
import { Myservice1Service } from './myservice1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Myservice1Service]

})
export class AppComponent {
  title = 'app';
  x:any;
  y:any;

  searchData:any={name:'',age:'',mobile:''}

   constructor(private m:Myservice1Service )
   {
       
   }

   ngOnInit()
   {
         this.x=this.m.run();
         this.y=this.m.myJson();
   }


}
