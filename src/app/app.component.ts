import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   constructor(
    private router:Router, private route:ActivatedRoute,public globalvar:GlobalvarService){
      // 
      
      // 
      // this.namaglobal=this.globalvar.getnama();
      }
  name = 'Angular ' + VERSION.major;
  // notes : any[][];
  // judul="";
  // judulglobal;


  INPUT(){
    // this.globalvar.setjudul(this.judul);
    // this.judulglobal=this.globalvar.getjudul();
    this.router.navigate(["/halaman1"]);
  }

  DETAIL(){
    // this.router.navigate(["/halaman2"]);

  }

  FAVOURITE(){
    // this.router.navigate(["/halaman3"]);

  }
}








// terbaru
