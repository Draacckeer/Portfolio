import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
  ]
})

export class HomeModule
{
}
