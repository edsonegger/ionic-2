import { Component } from '@angular/core';
import { NavController, Alert, ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-login/modal-login.html',
})
export class ModalLoginPage {
	
	user:any = {};
  	
  	constructor(private nav: NavController, public view: ViewController, public navParams: NavParams) {
  		console.log('Dados recebidos', navParams.get('action'));
  	}

	entrar(){
		// let alert = Alert.create({
	 //  		title: 'Entrando...',
	 //  		message: 'Login: '+this.user.login +', Password: '+this.user.password
	 //  	});
	 //  	this.nav.present(alert);
	 console.log('Login: '+this.user.login +', Password: '+this.user.password);
	  	this.view.dismiss(this.user);
	}

	close(){
		this.view.dismiss();
	}
}
