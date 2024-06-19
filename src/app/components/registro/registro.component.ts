import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  @ViewChild(LoginComponent)
  modal!: LoginComponent;
  registroForm!: FormGroup;
  paises: any[] = [];
  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesService
  ) {
  }
  ngOnInit() {
    this.paisesService.getCountries().subscribe(data => {
      this.paises = data;
    }, error => {
      console.error('Error fetching countries', error);
    });

    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      rango_de_edad: ['', [Validators.required],],
      politicas: ['', [Validators.required],],
      boletin: [''],
    });
  }
  onRegister() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    }
  }
  openModal() {
    this.modal.openModal();
  }
}
