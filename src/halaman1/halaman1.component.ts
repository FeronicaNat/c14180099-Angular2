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
  listnotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];
  lennote=0;
  //listnotes;

    constructor(
    private router:Router, public globalvar:GlobalvarService,private route:ActivatedRoute){
      // this.listnotes = this.globalvar.getnotes();
    }
    paramjudul:String;

    ngOnInit() {
    // let isijudul=this.route.snapshot.paramMap.get('judulnote');
    // this.paramjudul=isijudul;
      this.listnotes=this.globalvar.getnotes();
  }
   addnote(){
     if(this.judulnote==null||this.isinote==null||this.tanggalnote=="null"){
       alert("Semua data harus diisi")
     }
     else{
    //  this.globalvar.setjudul(this.judulnote);
    //  this.judulshow=this.globalvar.getjudul();
    //  this.globalvar.setisi(this.isinote);
    //  this.isishow=this.globalvar.getisi();
    //  this.globalvar.settanggal(this.tanggalnote);
    //  this.tanggalshow=this.globalvar.gettanggal();
     this.listnotes.push({ 
       judul: this.judulnote, 
       isi: this.isinote,
       tanggal:this.tanggalnote,
       favourite:0,
       index:0
       });
    //  console.log(this.listnotes[0]);
     this.lennote=this.listnotes.length;
     this.globalvar.setnotes(this.listnotes);
     
     for (var i = 0; i < this.lennote; i++) {
      console.log(
        this.listnotes[i],
        this.listnotes[i].judul
      );
      }
     }

    //  this.router.navigate(["/halaman2"]);


    // this.notes=[{judul:this.judulnote,isi:this.isinote,tanggal:this.tanggalnote}]
  
  }

}