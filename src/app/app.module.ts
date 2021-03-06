import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Tastings } from '../pages/degustations/tastings';
import { Top10 } from '../pages/top10/top10';
import { Infos } from "../pages/info/infos";

@NgModule({
  declarations: [
    MyApp,
    Tastings,
    Top10,
    Infos
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tastings,
    Top10,
    Infos
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
