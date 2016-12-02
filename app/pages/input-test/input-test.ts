import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

/*
  Generated class for the InputTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})
export class InputTestPage {

	login: string;
	password: string;
	
  constructor(private nav: NavController) {}

  entrar(){
  	let alert = Alert.create({
  		title: 'Entrando...',
  		message: 'Login: '+this.login +', Password: '+this.password
  	});
  	this.nav.present(alert);
  }
}
