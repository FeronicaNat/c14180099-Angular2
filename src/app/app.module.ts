import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { Halaman1Component } from '../halaman1/halaman1.component';
import { GlobalvarService } from '../globalvar.service';

const ROUTES: Routes = [
  {path: 'halaman1', component: Halaman1Component}
  // {path: 'login/:nama', component: LoginComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent,Halaman1Component],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]



  //  imports:      [ BrowserModule, FormsModule, 
  // RouterModule.forRoot(ROUTES) ],
  // declarations: [ AppComponent, HelloComponent, LoginComponent ],
  // bootstrap:    [ AppComponent ],
  // providers: [GlobalvarService]
})
export class AppModule { }
