import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckOutPage } from '../checkout/checkout';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  currentCart = <any>[];
  total = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.currentCart = window.localStorage.getItem('cart');
    this.currentCart = JSON.parse(this.currentCart);
    this.total = 0;
    if (this.currentCart.length > 0) {
      for (let item of this.currentCart) {
        this.total += item.price * item.amount;
      }
    }
    console.log(this.currentCart);
  }

  goToCheckOut() {
    this.navCtrl.push(CheckOutPage);
  }

  deleteItem(item) {
    this.currentCart = this.currentCart.filter(function(element, i) {
      return element.id !== item.id;
    });
    this.total = 0;
    if (this.currentCart.length > 0) {
      for (let item of this.currentCart) {
        this.total += item.price * item.amount;
      }
    }
    window.localStorage.setItem('cart', JSON.stringify(this.currentCart));
  }


}
