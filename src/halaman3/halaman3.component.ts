import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.component.html',
  styleUrls: ['./halaman3.component.css']
})
export class Halaman3Component implements OnInit {
  shownotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];
  listnotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];

  constructor(private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.shownotes = this.globalvar.getnotes();
    this.listnotes = this.globalvar.getnotes();
    console.log(this.shownotes.length);
  }

  unfavourite(idnote){
    for(var i=0;i<this.listnotes.length;i++){
     
      if(this.listnotes[i].index==idnote){
         alert(this.listnotes[i].index);
        if(this.listnotes[i].favourite==1){
          this.listnotes[i].favourite=0;
        }
      }
    }
    this.shownotes = this.listnotes;
    this.globalvar.setnotes(this.shownotes)

  }

}