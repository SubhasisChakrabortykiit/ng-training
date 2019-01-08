import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }
  
  create(contactData){
    //1. get the data from component
    console.log(contactData);

    // 2. send the data t api endpoint
    // 2.1 find api end point --- https://jsonplaceholder.typicode.com/users
    // 2.2. find out right http method - POST

    return this.http.post("https://jsonplaceholder.typicode.com/users",contactData)
      .pipe(map((resp) => { //3. receive resp from rest api
        console.log(resp);
        return resp.json(); //4. send the resp back to comp
      }));
  }
}
