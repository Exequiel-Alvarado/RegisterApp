import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'apps' },
    { title: 'MiCuenta', url: '/folder/micuenta', icon: 'paper-plane' },
    { title: 'EscanearQR', url: '/folder/escanearqr', icon: 'qr-code'},
    { title: 'MisClase', url: '/folder/misclase', icon: 'book' },
    { title: 'Calendario', url: '/folder/calendario', icon: 'newspaper' },
    { title: 'Asistencia', url: '/folder/asistencia', icon: 'bar-chart' },
    { title: 'Login', url: '/folder/login', icon: 'people' },
  ];
  public labels = ['presente', 'total',];
  constructor() {}
}
