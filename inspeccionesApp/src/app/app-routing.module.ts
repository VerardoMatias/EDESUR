import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'pages/registro', 
    loadChildren: './pages/registro/registro.module#RegistroPageModule' 
  },
  { 
    path: 'pages/categorias', 
    loadChildren: './pages/categorias/categorias.module#CategoriasPageModule' 
  },
  { 
    path: 'pages/listado', 
    loadChildren: './pages/listado/listado.module#ListadoPageModule' 
    },
  { 
    path: 'pages/formularios/form1', 
    loadChildren: './pages/formularios/form1/form1.module#Form1PageModule' 
  },
  { 
    path: 'pages/formularios/form2', 
    loadChildren: './pages/formularios/form2/form2.module#Form2PageModule' 
  },
  { 
    path: 'pages/formularios/form3', 
    loadChildren: './pages/formularios/form3/form3.module#Form3PageModule' 
  },
  { 
    path: 'pages/formularios/form4', 
    loadChildren: './pages/formularios/form4/form4.module#Form4PageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
