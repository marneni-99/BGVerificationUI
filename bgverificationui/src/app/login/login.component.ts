import { Component, OnInit } from '@angular/core';
import { MyserviceService, Logindata } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private ser:MyserviceService,private router:Router) { }

  msg:string="Enter Correct UserName and Password";
  ngOnInit(): void {
  }
  onSubmit(u:Logindata){
    this.ser.login(u).subscribe(
      users=>{
        console.log(users);
        if(users=="true")
            this.router.navigate(['app-home']);
        else
           return this.msg;
      }
    );
  }
}
