import { Injectable } from '@angular/core';

@Injectable()
// export class GlobalvarService {

//   // private Dataisi:String="";
//   // private Datajudul:String="";
//   // private Datatanggal:Date;
// notes :Array<{judul:string,isi:string,tanggal:Date}>;
// judul:String;
// isi:String;
// tanggal:Date;
// judulnote: string;
// isinote: string;
// tanggalnote: Date;

//   constructor() { }

//   public getisi(){
//     return this.isi;
//   }

//   public setisi(isi:string){
//     this.isi=isi;
//   }

//   public getjudul(){
//     return this.judul;
//   }

//   public setjudul(judul:string){
//     this.judul=judul;
//   }

//    public gettanggal(){
//     return this.tanggal;
//   }

//   public settanggal(tanggal:Date){
//     this.tanggal=tanggal;
//   }
 



// }

export class GlobalvarService {
  private listnotes: Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}> = [];
  constructor() { }

  public getnotes(){
    return this.listnotes;
  }

  public setnotes(listn :Array<{judul:string,isi:string,tanggal:Date,favourite:number,index:number}>){
    this.listnotes = listn;
  }
}