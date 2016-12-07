import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';

/*
  Generated class for the ToastTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {
  constructor(private nav: NavController) {}

  showToast() {
  	let toast = Toast.create({
  		message: 'Olá Mundo',
  		duration: 10000,
  		showCloseButton: true,
  		closeButtonText: 'Ok',
  		position: 'top' 
  	});

  	toast.onDismiss(() => {
  		console.log('toast finalizado');
  	}) ;

  	this.nav.present(toast);
  }
}
