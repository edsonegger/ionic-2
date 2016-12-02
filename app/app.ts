import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController } from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {ConnectionService} from './providers/connection-service/connection-service';

import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratedTestPage} from './pages/generated-test/generated-test';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import {CardTestPage} from './pages/card-test/card-test';
import {InputTestPage} from './pages/input-test/input-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  pages: Array<{component: any, title: string, icon: string}>;	
  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {

  	this.pages = [
  		{component: HomePage, title: 'Home', icon: 'home'},
		  {component: MenuTestPage, title: 'Menu Page', icon: 'snow'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'menu'},
      {component: AlertPage, title: 'Alert Page', icon: 'warning'},
      {component: ButtonTestPage, title: 'Button page exemple', icon: 'power'},
      {component: CardTestPage, title: 'Card page exemple', icon: 'card'},
      {component: InputTestPage, title: 'Input page example', icon: 'input'}
  	];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string) : void {
  	this.rootPage = page.component;
  	this.menuCtrl.close(menuSide);
  }

  menuOpened() : void {
    console.log('abriu menu 2');
  }
}

ionicBootstrap(MyApp, [ConnectionService], {
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  });
