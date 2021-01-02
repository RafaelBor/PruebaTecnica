import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CrearContactoComponent } from './pages/crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './pages/editar-contacto/editar-contacto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'crear-contacto',
    component: CrearContactoComponent
  },
  {
    path: 'editar-contacto/:id',
    component: EditarContactoComponent
  },
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
