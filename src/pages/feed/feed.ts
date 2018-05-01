import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public var1:number = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumeros(num1:number, num2:number){
    this.var1 = num1 + num2;
    return this.var1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.somaNumeros(3, 3);
  }

}
