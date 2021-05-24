import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
getdata :any;
logdata : any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getdata = JSON.parse(localStorage.getItem("totaldata")!); 
    
    
  }
  login(object: string){
    this.logdata = object;
    if(this.logdata.uname == "" && this.logdata.pword == ""){
      alert("Please enter Username and Password")
    }
    else{
      for (let index = 0; index < this.getdata.length; index++) {
        const element = this.getdata[index];
      if(element.uname == this.logdata.uname && element.pword == this.logdata.pword){
        this.router.navigate(['/posts']);
      }else{
        alert("Your Username or Password is wrong")
      }
    }
    }
  }
}
