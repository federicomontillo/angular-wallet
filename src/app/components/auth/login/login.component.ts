import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;

  constructor( private fb: FormBuilder,
    private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  login(){
    const user = this.form.value.user;
    const password = this.form.value.password;

    if(user == 'Federico' && password == 'hola123'){
    //HJola
    }else{
      this.error();
    }
  }

  error(){
    this._snackBar.open('Usuario o Contraseña ingresados son invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}
