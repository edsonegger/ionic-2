import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/list-test/list-test.html',
})
export class ListTestPage {

	personagensGoT: Array<string>;
	personagensHP: Array<string>;

  constructor(private nav: NavController) {
  	this.personagensGoT = [
  	'Tyrion Lannister', 'Daenerys Targaryen', 'Oberyn Martell'
  	];

  	this.personagensHP = [
  	'Harry Poter', 'Ermione Grainger', 'Rony Wesley'
  	];
  }


}
