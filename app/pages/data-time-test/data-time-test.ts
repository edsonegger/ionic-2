import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the DataTimeTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/data-time-test/data-time-test.html',
})
export class DataTimeTestPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  constructor(private nav: NavController) {}
}
