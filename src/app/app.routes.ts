import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NecesitoComponent } from './pages/necesito/necesito.component';
import { RepartoComponent } from './pages/reparto/reparto.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    title: 'SOS aquí hoy',
  },
  {
    path: 'necesito',
    component: NecesitoComponent,
    title: 'Qué necesito',
  },
  {
    path: 'reparto',
    component: RepartoComponent,
    title: 'Dónde reparto',
  },
];
