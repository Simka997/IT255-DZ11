import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dodavanje-cveca',
  templateUrl: './dodavanje-cveca.component.html',
  styleUrls: ['./dodavanje-cveca.component.css']
})
export class DodavanjeCvecaComponent implements OnInit {
  public dodavanjeCvecaForm = new FormGroup({
    sifra: new FormControl(),
    naziv: new FormControl(),
    cena: new FormControl(),
    opis: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public dodajCvet() {
    const body = new URLSearchParams();

    body.set('sifra', this.dodavanjeCvecaForm.value.sifra);
    body.set('naziv', this.dodavanjeCvecaForm.value.naziv);
    body.set('cena', this.dodavanjeCvecaForm.value.cena);
    body.set('opis', this.dodavanjeCvecaForm.value.opis);

    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
   this._http.post('http://localhost:8080/IT255-DZ11/dodajCvece.php', body.toString(), {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });

  }
}
