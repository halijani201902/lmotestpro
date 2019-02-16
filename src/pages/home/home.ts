import { Component } from '@angular/core';
import { NavController,
		 IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	data: any = null;
	fakeData: Array<number> = [1,2,3];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.data = true;
    }, 3000);
  }

}
