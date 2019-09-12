import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

// //rutas hijas
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';




export const APP_ROUTES: Routes= [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', component: UsuarioComponent,
        children:USUARIO_ROUTES//[ //--------------------------------------------------rutas hijas---------------------------
            // { path: 'nuevo', component: UsuarioNuevoComponent },
            // { path: 'editar', component: UsuarioEditarComponent },
            // { path: 'detalle', component: UsuarioDetalleComponent },
            // { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }

       // ]  
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

 export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
