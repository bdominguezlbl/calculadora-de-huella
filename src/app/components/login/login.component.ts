import { Component, ElementRef, HostListener, NgModule, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('modalLogin')
  modalLogin!: ElementRef;
  
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  openModal() {
    this.modalLogin.nativeElement.style.display = 'block';
    this.modalLogin.nativeElement.classList.add('show');
  }

  closeModal() {
    this.modalLogin.nativeElement.style.display = 'none';
    this.modalLogin.nativeElement.classList.remove('show');
  }
}