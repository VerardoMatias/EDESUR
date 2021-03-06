import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Registro',
      url: '/pages/registro',
      icon: 'registro'
    },
    {
      title: 'Categorias',
      url: '/pages/categorias',
      icon: 'categories'
    },
    {
      title: 'Listado Formularios',
      url: '/pages/listado',
      icon: 'list'
    },
    {
      title: 'Formulario 25',
      url: '/pages/form1',
      icon: 'form'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
