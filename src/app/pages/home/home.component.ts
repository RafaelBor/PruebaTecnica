import { Component, OnInit, ViewChild } from '@angular/core';
import {ContactsService} from '../../services/contacts.services'
import {Contacto} from '../../models/contact.interfaces'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public cantidadContactos: number = 0;
  public cantidadCumpleaneros: number = 0;
  public contactos: Array<Contacto> = [];
  constructor(
    private _contactos: ContactsService
  ) { 
   
  }

  ngOnInit(): void {
    
    this.obtenerContactos();
    this.obtenerCumpleañeros();
   
  }

  obtenerContactos()
  {
    this.contactos = this._contactos.contactosLocalStorage;

    for(let i=0; i<this.contactos.length; i++)
    {
      this.cantidadContactos += 1;
      console.log(this.cantidadContactos);
    }
  
  }

  obtenerCumpleañeros()
  {
    this.contactos = this._contactos.contactosLocalStorage;

  
    for(let i=0; i<this.contactos.length; i++)
    {
      //OBTENER FECHA DE CUMPLEAÑOS DE LOS CONTACTOS
      let fecha = new Date(this.contactos[i].cumpleanios) 
      let mes = fecha.getMonth();
      let dia = fecha.getDate();
      
      //OBTENER FECHA DE HOY
      let date = new Date();
      let mesActual = date.getMonth();
      let diaActual = date.getDate();

      //COMPARAR FECHAS DE CONTACTOS CON LA ACTUAL
      if(mes == mesActual && dia == diaActual)
      {
        this.cantidadCumpleaneros += 1
      }
    
      
    }
  }
  

}
