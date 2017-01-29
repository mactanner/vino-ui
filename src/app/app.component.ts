import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Tastings} from "../pages/degustations/tastings";
import {Top10} from "../pages/top10/top10";
import {Infos} from "../pages/info/infos";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Tastings;
  pages: Array<{title: string, component: any}>;
  tastingsPage: {title: string, component: any};
  top10Page: {title: string, component: any};
  infoPage: {title: string, component: any};

  constructor(public platform: Platform) {
        this.initializeApp();

    this.tastingsPage = { title: 'Degustationen', component: Tastings };
    this.top10Page = { title: 'Top Ten', component: Top10 };
    this.infoPage = { title: 'Infos', component: Infos };

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
