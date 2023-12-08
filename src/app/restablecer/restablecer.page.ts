import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  formulariousuario: FormGroup;
  alertButtons = ['Aceptar'];

  constructor(private fb: FormBuilder) {
    this.formulariousuario = this.fb.group({
      Correo: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
    });
  }
  ngOnInit() {}
}
