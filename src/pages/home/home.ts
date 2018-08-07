import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LevelonePage } from '../levelone/levelone';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  StartGame: any = LevelonePage;
  constructor(public navCtrl: NavController) { 
    this.StartGame = LevelonePage;     
  }

}
