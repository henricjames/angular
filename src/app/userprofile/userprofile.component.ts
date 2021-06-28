import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  users:any;

  constructor(private http: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    let id= this.route.snapshot.params.id
    var url ="https://reqres.in/api/users/"+id;
    this.http.get(url).subscribe(data=>
      {
        this.users=data['data'];



      });

}
}
