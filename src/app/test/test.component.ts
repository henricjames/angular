import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test:any;
  loading:any
  Changer:String
  sortoptions=Array("first_name","lastname",undefined)



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loading = true;
    var url ="https://reqres.in/api/users?delay=0";
    this.http.get(url).subscribe(data=>
      {
        this.test=data['data'];
        console.log(this.test);
        this.loading = false;
      }
    )



  }

  onOptionsSelected(value){
 console.log(value);
  }

  getap()
  {
    this.loading = true;
    var url ="https://reqres.in/api/users?delay=0";
    this.http.get(url).subscribe(data=>
      {
        this.test=data['data'];
        console.log(this.test);
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
