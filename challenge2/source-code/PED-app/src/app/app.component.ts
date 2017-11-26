import { MathArPage } from '../pages/math-ar/math-ar';
import { MathEnPage } from '../pages/math-en/math-en';
import { ArabicHomePage } from '../pages/arabic-home/arabic-home';
import { EnglishHomePage } from '../pages/english-home/english-home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    }
    );
  }

  showMath(){
    this.nav.push(MathEnPage);
  }
  showMathAr(){
    this.nav.push(MathArPage);
  }
  showChem(){
    this.nav.push(ArabicHomePage);
  }
  showChemAr(){
    this.nav.push(ArabicHomePage);
  }

}

