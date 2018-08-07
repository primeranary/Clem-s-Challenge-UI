import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { SettingsPage } from '../pages/settings/settings';
import { LevelonePage } from '../pages/levelone/levelone';
import { LeveltwoPage } from '../pages/leveltwo/leveltwo';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { FlashCardsProvider } from '../providers/flash-cards/flash-cards';
import { DataProvider } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountPage,
    SettingsPage,
  LevelonePage,
  LeveltwoPage,
  FlashCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountPage,
    SettingsPage,
   LevelonePage,
   LeveltwoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,  
    FlashCardsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  
  ]
})
export class AppModule {}
