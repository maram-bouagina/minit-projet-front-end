import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Livre';
  constructor (public authService: AuthService, private router: Router) {}
  ngOnInit () {
    /*let isloggedin!: string;
    let loggedUser!:string;
    isloggedin=localStorage.getItem('isloggedIn')??'';
    loggedUser=localStorage.getItem('loggedUser')??'';
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else//test
    this.authService.setLoggedUserFromLocalStorage(loggedUser);*/ 
    }
    
    onLogout(){
        console.log('onLogout() déclenchée');
        this.authService.logout();
      }


}
