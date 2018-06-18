import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from '../pages/pocetna/pocetna.component';
import { OnamaComponent } from '../pages/onama/onama.component';
import { DodavanjeCvecaComponent } from '../pages/dodavanje-cveca/dodavanje-cveca.component';
import { RegistracijaComponent } from '../pages/registracija/registracija.component';
const routes: Routes = [
 {
 path: '',
 component: PocetnaComponent,
 pathMatch: 'full'
 },
 {
 path: 'Onama',
 component: OnamaComponent,
 },
 {
    path: 'dodavanjeCveca',
    component: DodavanjeCvecaComponent,
    },
    {
        path: 'registracija',
        component: RegistracijaComponent,
        }
];
@NgModule({
 imports: [
 RouterModule.forRoot(routes)
 ],
 exports: [
 RouterModule
 ],
 declarations: []
})
export class AppRoutingModule { }