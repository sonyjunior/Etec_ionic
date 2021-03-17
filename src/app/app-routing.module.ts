import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./contato/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },  {
    path: 'listagem',
    loadChildren: () => import('./contato/listagem/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./contato/consulta/consulta.module').then( m => m.ConsultaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
