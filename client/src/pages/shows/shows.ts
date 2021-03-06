import { Component } from '@angular/core';

import { NavController, ModalController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ShowContentPage } from '../show-content/show-content';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-shows',
  templateUrl: 'shows.html'
})
export class ShowsPage {

  allShows = <any>[];

  constructor(public navCtrl: NavController,
              private apollo: Angular2Apollo,
              public modalCtrl: ModalController) {

  }


  ionViewDidEnter(){
    this.loadShows().then(({data}) => {
      if (data){
        this.allShows = data
        this.allShows = this.allShows.allShows;
        console.log(this.allShows);
      }
    });
  }



  loadShows(){
    return this.apollo.mutate({
      mutation: gql`
      query{
        allShows{
          id
          name
          altName
          date
        }
      }
      `
    }).toPromise();
  }

  viewShow(show){
    let modal = this.modalCtrl.create(ShowContentPage, {show: show});
    modal.present();
  }

}
