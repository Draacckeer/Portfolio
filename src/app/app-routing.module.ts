import {Route} from "@angular/router";

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/admin/pages/home/home.module').then(m => m.HomeModule) },
]
