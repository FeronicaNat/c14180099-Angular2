import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';
// import { MatIconRegistry } from '@angular/material';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {
  shownotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];
  listnotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];

  constructor(
    private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute){
      // this.globalvar.getnotes();
    }

  ngOnInit() {
    this.shownotes = this.globalvar.getnotes();
    this.listnotes = this.globalvar.getnotes();
    console.log(this.shownotes.length);
  }
  favourite(idnote){
    for(var i=0;i<this.listnotes.length;i++){
     
      if(this.listnotes[i].index==idnote){
         alert(this.listnotes[i].index);
        if(this.listnotes[i].favourite==0){
          this.listnotes[i].favourite=1;
        }
        else{
          this.listnotes[i].favourite=0;
        }
      }
    }
    this.shownotes = this.listnotes;
    this.globalvar.setnotes(this.shownotes)

  }

}