import { SobrePage } from './../pages/sobre/sobre';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SlidePage } from '../pages/slide/slide';
import { SigninPage } from '../pages/signin/signin';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Pagina Inicial', component: HomePage },
      { icon: 'book', title: 'Glossário', component: 'CategoriasPage'},
      { icon: 'star', title: 'Dicas', component: 'DicaPage' },
      // { icon: 'attach', title: 'Sobre', component: 'SobrePage' },
      // { icon: 'contact', title: 'Conta', component: 'ContaPage'},
      { icon: 'exit', title: 'Sair', component: 'SigninPage' }

    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

