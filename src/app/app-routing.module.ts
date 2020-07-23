import { HomeComponent } from './Components/home/home.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateComponent } from './Components/contact-create/contact-create.component';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
