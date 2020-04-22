import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private ser:HttpClient) { }

  up: Logindata;
  public getUser(){
    console.log("ins service get employees");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.ser.get<Logindata>("http://localhost:1122/user/GetAllUsers");
  }

  public addUser(addemp: Logindata) {
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:1122/user/addUser", addemp,  { headers, responseType: 'text'});
  }

  public update(up: Logindata) {
    this.up = up;
  }
  public updateMethod() {
    return this.up;
  }
  public onUpdate(updatemp: Logindata) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:1122/user/UpdateUser", updatemp,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.delete("http://localhost:1122/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }
  login(u:Logindata){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:1122/user/Loginuser", u,  { headers, responseType: 'text'});
  }

  //logOut() {
    //sessionStorage.removeItem('username')
  //}

}
export class Logindata{
  userId:number;
  userName:string;
  userType:string;
  userPassword:string;
  userPhonenumber:number;
  userEmail:string;
}