import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { APP_MODE } from '../environment/mode';

import { LmoTestPro } from './app.component';

@NgModule({
  declarations: [
    LmoTestPro
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(LmoTestPro,APP_MODE)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LmoTestPro
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
