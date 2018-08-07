import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the FlashCardsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlashCardsProvider { 
  public API = 'http://localhost:8080/';

  idx = 0;
  defaultCards: Array<Object>;
  httpCl: HttpClient;
  public _robotOverlords: any[] = [];
  load: any;

  constructor(public http: HttpClient) {
    console.log('FlashCardsProvider Provider');
    this.httpCl = http;
    this.getAllData();
  }
  getAllData() {
     return this.http.get(this.API + "questions");
  }
 
  cardFor(cardindex) {
    this.idx = cardindex % this.defaultCards.length;
    return this.defaultCards[this.idx];
  }
  
  shuffle(API) {
    var currentIndex = API.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = API[currentIndex];
      API[currentIndex] = API[randomIndex];
      API[randomIndex] = temporaryValue;
    }
  
    return API;
  }

  randomCards() {
    return this.shuffle(this.getAllData())
    
  }
  
  testCards =
    [
      {
        front: "Hello1",
        back: "World!"
      },
      {
        front: "Hello1",
        back: "World!"
      },
      {
        front: "Card2",
        back: "Wow!"
      },
      {
        front: "Card3",
        back: "Nothing!"
      },
      {
        front: "Card4",
        back: "Never Mind!"
      },
      {
        front: "Card5",
        back: "Sweet!"
      }

    ];
}
