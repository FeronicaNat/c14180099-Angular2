import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Halaman1Component } from '../halaman1/halaman1.component';
import { GlobalvarService } from '../globalvar.service';
import { Halaman2Component } from '../halaman2/halaman2.component';
import { Halaman3Component } from '../halaman3/halaman3.component';
// import { Halaman2bComponent } from '../halaman2b/halaman2b.component';


const ROUTES: Routes = [
  {path: 'halaman1', component: Halaman1Component},
  // {path: 'halaman2/:idnote', component: Halaman2Component}
  {path: 'halaman2', component: Halaman2Component},
  {path: 'halaman3', component: Halaman3Component}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent,Halaman1Component,Halaman2Component,Halaman3Component],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]



  //  imports:      [ BrowserModule, FormsModule, 
  // RouterModule.forRoot(ROUTES) ],
  // declarations: [ AppComponent, HelloComponent, LoginComponent ],
  // bootstrap:    [ AppComponent ],
  // providers: [GlobalvarService]
})
export class AppModule { }
