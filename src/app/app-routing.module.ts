import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordPageModule)
  },
  {
    path: 'yo-te-llevo',
    loadChildren: () => import('./yo-te-llevo/yo-te-llevo.module').then(m => m.YoTeLlevoPageModule)
  },
  { path: 'inicio', 
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  {
    path: 'buscar-viajes',
    loadChildren: () => import('./buscar-viajes/buscar-viajes.module').then(m => m.BuscarViajesPageModule)
  },
  {
    path: 'historial-viajes',
    loadChildren: () => import('./historial-viajes/historial-viajes.module').then(m => m.HistorialViajesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'mapa-viajes',
    loadChildren: () => import('./mapa-viajes/mapa-viajes.module').then( m => m.MapaViajesPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
