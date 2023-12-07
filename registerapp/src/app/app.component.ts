import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'apps' },
    { title: 'MiCuenta', url: 'mi-cuenta', icon: 'paper-plane' },
    { title: 'EscanearQR', url: 'escanear-qr', icon: 'qr-code'},
    { title: 'MisClase', url: 'mis-clase', icon: 'book' },
    { title: 'Calendario', url: 'calendario', icon: 'newspaper' },
    { title: 'Asistencia', url: 'asistencia', icon: 'bar-chart' },
    { title: 'Login', url: 'login', icon: 'people' },
  ];
  public labels = ['presente', 'total',];
  constructor() {}
}
