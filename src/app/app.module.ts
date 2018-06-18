import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import {OnamaComponent} from './pages/onama/onama.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DodavanjeCvecaComponent } from './pages/dodavanje-cveca/dodavanje-cveca.component';
import { RegistracijaComponent } from './pages/registracija/registracija.component';


@NgModule({
  declarations: [
    AppComponent,
    OnamaComponent,
    PocetnaComponent,
    SearchpipePipe,
    DodavanjeCvecaComponent,
    RegistracijaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
