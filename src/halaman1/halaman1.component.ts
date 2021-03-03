import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman1',
  templateUrl: './halaman1.component.html',
  styleUrls: ['./halaman1.component.css']
})
export class Halaman1Component implements OnInit {

  judulnote:"";
  isinote:"";
  tanggalnote;
  judulshow;
  isishow;
  tanggalshow;
  notes : any[][];

    constructor(
    private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute){
      // this.namaglobal=this.globalvar.getnama();
    }
    paramjudul:String;

    ngOnInit() {
    // let isijudul=this.route.snapshot.paramMap.get('judulnote');
    // this.paramjudul=isijudul;
  }
   addnote(){
     this.globalvar.setjudul(this.judulnote);
     this.judulshow=this.globalvar.getjudul();
     this.globalvar.setisi(this.isinote);
     this.isishow=this.globalvar.getisi();
     this.globalvar.settanggal(this.tanggalnote);
     this.tanggalshow=this.globalvar.gettanggal();

    // this.notes=[{judul:this.judulnote,isi:this.isinote,tanggal:this.tanggalnote}]
  
  }

}