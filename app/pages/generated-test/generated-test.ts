import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

/*
  Generated class for the GeneratedTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/generated-test/generated-test.html',
})
export class GeneratedTestPage {
  constructor(private nav: NavController, private connectionService: ConnectionService) {}

buscarCep() : void {
	this.connectionService.getCep('80510325')
	.then((res) => {
		let json = res.json();
		console.log(json);			
		
	}).catch((err) => {
		console.log(err);
	});
}
}


