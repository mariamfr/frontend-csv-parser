import { Component } from '@angular/core';
//para manejar el tema de los formularios
import { FormsModule } from '@angular/forms';
//traer el servicio 
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //parametros
  email: string = ''
  password: string = ''
  constructor(private authService : AuthService, private router: Router){}

  onSubmit(event: Event){
    //prevenir el comportamiento por defecto del evento submit
    event.preventDefault()
    console.log(this.email)
    console.log(this.password)
    //activar el servicio register
    this.authService.register(this.email, this.password).subscribe(
      //aca cae los errores los 200, 201 ...
      response => {
          console.log('ejecutado desde respuesta')
          console.log(response)
          if(response.ok) {
          Swal.fire('User registered!..', response.msg, 'success')
          //redirecciona al login
          this.router.navigate(['/login'])
          } else {
            Swal.fire('error!..', response.error.msg, 'error')
          }
      },
      error => {
          console.log('Ejecutado desde el error')
          console.log(error)
          Swal.fire('!!upss error', error.error.msg, 'error' )
      }
    )
  }

}
