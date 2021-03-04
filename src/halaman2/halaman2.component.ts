import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {
  shownotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];

  constructor(
    private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute){
      // this.globalvar.getnotes();
    }

  ngOnInit() {
    this.shownotes = this.globalvar.getnotes();
    console.log(this.shownotes.length);
  }
  favourite(idnote){
     alert(this.globalvar.getnotes['index']);
    for(var i=0;i<this.globalvar.getnotes.length;i++){
     
      if(this.globalvar.getnotes['index']==idnote){
         alert(this.globalvar.getnotes['index']);
        if(this.globalvar.getnotes['favourite']==0){
          this.globalvar.getnotes['favourite']=1;
        }
        else{
          this.globalvar.getnotes['favourite']=0;
        }
      }
    }
    this.shownotes = this.globalvar.getnotes();

  }

}