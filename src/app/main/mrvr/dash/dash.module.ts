import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashProductsComponent } from './dash-products/dash-products.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/main/core/auth.guard';


const routes: Routes = [
  {
    path: 'dash-products',
    component: DashProductsComponent,
    // canActivate: [AuthGuard]
  }
];


@NgModule({
  declarations: [DashProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashModule { }
