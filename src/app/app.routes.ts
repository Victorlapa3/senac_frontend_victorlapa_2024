import { Routes } from '@angular/router';
import { CartasModule } from './cartas/cartas.module';

export const routes: Routes = [
  { path: '', redirectTo: 'cartas', pathMatch: 'full'},
  {
    path: 'cartas',
    loadChildren: () =>
      import('./cartas/cartas.module').then((m) => m.CartasModule),

  },
];
