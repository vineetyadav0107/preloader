import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { PrimeImgComponent } from './prime-img/prime-img.component';

const routes: Routes = [
  {path:'loading',component:LoadingComponent},
  {path:'prime-img',component:PrimeImgComponent},
  {path: '', pathMatch:'full', redirectTo:'loading'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
