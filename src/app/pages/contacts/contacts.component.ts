import { Component, OnInit } from '@angular/core';
import {Contacto} from '../../models/contact.interfaces'
import {ContactsService} from '../../services/contacts.services'
import {Router} from '@angular/router'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactos: Array<Contacto>
  constructor(
    private _contactos: ContactsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }

  obtenerContactos()
  {
    this.contactos = this._contactos.contactosLocalStorage;
    console.log(this.contactos);
  }

  EditarContacto(id)
  {
    
    this._router.navigate(['editar-contacto/' + id]);
  }

  eliminarContacto(id)
  {
    this._contactos.EliminarContacto(id);
    this.obtenerContactos();
  }

  buscarContactos(event)
  {
   let nombreBuscar = event.target.value;
   console.log("event.target.value");
   console.log(event.target.value);

   
      this.contactos = this._contactos.contactosLocalStorage.filter(x=> {
        return x.nombre.toLocaleLowerCase().includes(nombreBuscar)
      })
  
   
  }

}
