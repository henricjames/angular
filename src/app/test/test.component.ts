import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  users:any;
  loading:any
  sortoptions=Array("first_name","lastname",undefined)
  selectedName:any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    var url ="https://reqres.in/api/users?delay=3";
    this.http.get(url).subscribe(data=>
      {
        this.users=data['data'];
        console.log(this.users);
        this.loading = false;
      }
    )



  }

  sortvalues(value){

 this.users.sort((a,b) =>{
   let x=(a[this.selectedName]);
   let y=(b[this.selectedName]);
   if(x>y)
 {
   return 1
 }
 else{
   return -1
 }
 })
  }

  getap()
  {
    this.loading = true;
    var url ="https://reqres.in/api/users?delay=0";
    this.http.get(url).subscribe(data=>
      {
        this.users=data['data'];
        console.log(this.users);
        this.loading = false;
      }
    )

  }

  gettex()
  {
    var text=document.getElementById("users")
    console.log(text);
  }


}
