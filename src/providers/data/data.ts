import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  data: any;
  public API = 'http://localhost:8080/';
  constructor(public http: HttpClient) {

  }

  load(){

      if(this.data){
          return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

          this.getAllData().subscribe(data => {
              this.data = this.getAllData;
              resolve(this.data);
          });

      });

  }
  getAllData() {
    return this.http.get(this.API + "allquesans");
 }
}
