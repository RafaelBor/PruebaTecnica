import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CrearContactoComponent } from './pages/crear-contacto/crear-contacto.component'

import {ReactiveFormsModule} from '@angular/forms';

import { EditarContactoComponent } from './pages/editar-contacto/editar-contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    CrearContactoComponent,
    EditarContactoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
