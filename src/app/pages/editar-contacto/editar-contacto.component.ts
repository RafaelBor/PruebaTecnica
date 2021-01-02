import { Component, OnInit, } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../../services/contacts.services';
import {Router, ActivatedRoute} from '@angular/router';
import {Contacto} from '../../models/contact.interfaces'

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  public formularioCreado: FormGroup;
  public contacto: Contacto;
  constructor(
    private formBuilder: FormBuilder,
    private _contactos: ContactsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.obtenerContacto();
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

  editar()
  {
    this.contacto = this.formularioCreado.value;
    this._contactos.EditarContacto(this.contacto);

    this._router.navigate(['contacts']);
  }

  obtenerContacto()
  {
    let id = this._route.snapshot.paramMap.get('id');
   this.contacto = this._contactos.obtenerContacto(id);

   console.log(this.contacto);

   this.formularioCreado.setValue({
     id: this.contacto.id,
    nombre: this.contacto.nombre,
    celular: this.contacto.celular,
    direccion: this.contacto.direccion,
    cumpleanios: this.contacto.cumpleanios,
    
    })
  }


  regresar()
  {
    this._router.navigate(['contacts']);
  }

}
