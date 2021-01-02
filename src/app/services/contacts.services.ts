import { Injectable } from '@angular/core';
import {Contacto} from '../models/contact.interfaces'


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacto: Contacto
  

  constructor(
  
  ) { 
   
  }

  //AGREGAR CONTACTO A LOCAL STORAGE
  agregarLocalStorage(contacto: Contacto)
  {
    let contactosGuardados: Contacto[] = this.contactosLocalStorage;

    contactosGuardados.push(contacto);

    localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
  }


  //OBTENER LA LISTA DE CONTACTOS GUARDADOS
  get contactosLocalStorage(): Contacto[]
  {
    let contactosStorage: Contacto[] = JSON.parse(localStorage.getItem('contactos'));
    if(contactosStorage == null)
    {
      return new Array<Contacto>();
    }

    return contactosStorage;
  }

  //OBTENER CONTACTO POR ID
  obtenerContacto(id)
  {
    let contactosGuardados: Contacto[] = this.contactosLocalStorage;

    for(let i=0; i<contactosGuardados.length; i++)
    {
      if(contactosGuardados[i].id == id)
      {
        this.contacto = contactosGuardados[i];
       return this.contacto
       
      }  
    }
    
  }

  EditarContacto(contacto: Contacto)
  {
    let contactosGuardados: Contacto[] = this.contactosLocalStorage;

    for(let i=0; i<contactosGuardados.length; i++)
    {
      if(contactosGuardados[i].id == contacto.id)
      {
        console.log(contacto);
        contactosGuardados[i] = contacto;
        console.log(contactosGuardados);
        localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
       
      }  
    }
  }

  //ELIMINAR CONTACTO
  EliminarContacto(id)
  {
    let contactosGuardados: Contacto[] = this.contactosLocalStorage;

    for(let i=0; i<contactosGuardados.length; i++)
    {
      if(contactosGuardados[i].id == id)
      {
        contactosGuardados = contactosGuardados.filter(contact => contact.id !== id);

        localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
      }
    }
  }

}