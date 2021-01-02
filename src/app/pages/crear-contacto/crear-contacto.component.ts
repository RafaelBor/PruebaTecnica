import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contacto} from '../../models/contact.interfaces'
import {Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.services'

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {

  public formularioCreado: FormGroup;
  public contacto= new Contacto

  public contactosGuardados: Contacto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _contactos: ContactsService
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }


  crearFormulario()
  {
    this.formularioCreado = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      cumpleanios: ['', Validators.required]
    })
  }

  guardar()
  {
    this.contacto = this.formularioCreado.value as Contacto;
    console.log(this.contacto);
    this._contactos.agregarLocalStorage(this.contacto);
    this.formularioCreado.reset();

    this._router.navigate(['contacts']);
   
  }

  limpiar()
  {
    this.formularioCreado.reset();
  }

  regresar()
  {
    this._router.navigate(['contacts']);
  }

}
