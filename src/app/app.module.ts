
import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slide } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { DatePipe } from '@angular/common';

import { MyApp } from './app.component';
import { SlidePage } from '../pages/slide/slide';
// import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AccountProvider } from '../providers/account/account';
import { CategoriasProvider } from '../providers/categorias/categorias';
import { DicaProvider } from '../providers/dica/dica';
import { HomeProvider } from '../providers/home/home';

@NgModule({
  declarations: [
    MyApp,
    SlidePage,
    HomePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDO85A__-0rWngXXoK54i5XokSpweS0ZU4",
      authDomain: "gloativos-2602f.firebaseapp.com",
      databaseURL: "https://gloativos-2602f.firebaseio.com",
      projectId: "gloativos",
      storageBucket: "gloativos.appspot.com",
      messagingSenderId: "1016966073527"

    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SlidePage,
    HomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    CategoriasProvider,
    DicaProvider,
    DatePipe,
    HomeProvider
  ]
})
export class AppModule {}
