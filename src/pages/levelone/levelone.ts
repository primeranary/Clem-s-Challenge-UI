import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { FlashCardsProvider } from '../../providers/flash-cards/flash-cards';
import { LeveltwoPage } from '../leveltwo/leveltwo';

/**
 * Generated class for the LevelonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-levelone',
  templateUrl: 'levelone.html',
})
export class LevelonePage {

  @ViewChild(Slides) slides: Slides;

  cardSupply: any;
  prov: any;
  currentIndex = 0;
  
  constructor(public navCtrl: NavController, private provider: FlashCardsProvider) {
    this.prov = provider;  
    this.cardSupply = provider.getAllData(); 
    console.log("in contructor of level one page");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     this.provider.getAllData().subscribe(data => this.cardSupply = data);
  }
  
  slideChanged() {
    // ready for more functionality
  }

  nextSlide() {
    // ready for more functionality
  }

  prevSlide() {
    
    let idx = this.slides.getPreviousIndex() -1;
    this.slides.slideTo(idx, 500);
  }

  reset() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
  next() {
    let idx = this.slides.getActiveIndex() + 1;
    this.slides.slideTo(idx, 500);
  }

  randomize() {
    this.cardSupply = this.prov.randomCards();
    
    this.navCtrl.setRoot(this.navCtrl.getActive().component);

  }

}
