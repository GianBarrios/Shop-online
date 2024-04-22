import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PassThrough } from 'stream';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj : any ={
    userName: '',
    Password: ''
  }
  constructor(private router: Router){

  }
  onLogin(){
    if (this.loginObj.userName == "admin" && this.loginObj.password == "2424"){
      this.router.navigateByUrl('/products')
    }else {
      alert('Wrong Credentials')
    }
  }
  
}
