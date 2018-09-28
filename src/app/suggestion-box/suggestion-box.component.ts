import { Component, OnInit } from '@angular/core';
import { timer, from, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-suggestion-box',
  templateUrl: './suggestion-box.component.html',
  styleUrls: ['./suggestion-box.component.scss']
})
export class SuggestionBoxComponent implements OnInit {
   users:Object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(): any {
    let requestOffset = Math.floor(Math.random()*500)
     this.http.get('https://api.github.com/users?since='+ requestOffset)
     .pipe(startWith(null))
     .subscribe(val =>{
      this.users = val;
    })
  }

  deleteUser(data){
    console.log(this.users);
    
  }

  

}
