import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MyserviceService,Logindata} from '../myservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private ser:MyserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  onSubmit(addemp:Logindata):any{
    console.log(addemp);
     this.ser.addUser(addemp).subscribe(data => {
      });
      this.router.navigate(['app-login']);
  }

}
