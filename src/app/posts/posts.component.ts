import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
name : string []=[];
data :any;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("totaldata")!);
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
     this.name=element.fname.toUpperCase();      
    }
    
  }

}
