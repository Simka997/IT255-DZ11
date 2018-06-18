import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  
  public registracijaForm = new FormGroup({
    ime: new FormControl(),
    prezime: new FormControl(),
    username: new FormControl(),
    sifra: new FormControl()
  });

  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public registracija() {

    const body = new URLSearchParams();

    body.set('ime', this.registracijaForm.value.ime);
    body.set('prezime', this.registracijaForm.value.prezime);
    body.set('username', this.registracijaForm.value.username);
    body.set('sifra', this.registracijaForm.value.sifra);

    const headers = new Headers();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
   this._http.post('http://localhost:8080/IT255-DZ11/registracija.php', body.toString(), {
      headers: headers,
    }).subscribe((result) => {
      this._router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
    });
  }
}
