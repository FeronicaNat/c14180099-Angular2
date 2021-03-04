import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.component.html',
  styleUrls: ['./halaman2.component.css']
})
export class Halaman2Component implements OnInit {
  shownotes: Array<{judul:string,isi:string,tanggal:Date}> = [];

  constructor(
    private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute){
      // this.globalvar.getnotes();
    }

  ngOnInit() {
    this.shownotes = this.globalvar.getnotes();
    console.log(this.shownotes.length);
  }

}