import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
totaldata: any [] = [];
data :any;
getdata :any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getdata = JSON.parse(localStorage.getItem("totaldata")!);
    
  }
register(object: any){
  this.data=object;
  if (this.data.fname =="" || this.data.lname =="" || this.data.pword =="" || this.data.uword =="" ){
    alert("Fill all the details")
    this.data=[];    
  }else{
  if (this.getdata !== null ) {
    for (let i = 0; i < this.getdata.length; i++) {
      this.totaldata.push(this.getdata[i]); 
    }
this.totaldata.push(this.data);
localStorage.setItem("totaldata",JSON.stringify(this.totaldata).toLowerCase());
this.router.navigate(['/Login'])
this.ngOnInit();
}else{
this.data=object;
this.totaldata.push(this.data);
localStorage.setItem("totaldata",JSON.stringify(this.totaldata).toLowerCase());
this.router.navigate(['/Login'])
this.ngOnInit();
}
}
}
}
