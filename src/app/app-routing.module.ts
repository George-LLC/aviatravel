import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {IncomingtoursPageComponent} from './incomingtours-page/incomingtours-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'incoming', component: IncomingtoursPageComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



