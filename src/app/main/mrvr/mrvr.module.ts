import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrvrComponent } from './mrvr.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { UsersComponent } from './users/users.component';
import { StripeComponent } from './stripe/stripe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatIconModule, MatOptionModule, MatSelectModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatDialogModule, MatDatepickerModule, MatMenuModule, MatRippleModule  } from '@angular/material';
import { ProdutDetailComponent } from './products/produt-detail/produt-detail.component';
import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { AuthGuard } from '../core/auth.guard';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'product-detail',
    component: ProdutDetailComponent
  },
  {
    path: 'dash',
    component: MrvrComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'vendors',
    component: VendorsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'stripe',
    component: StripeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    MrvrComponent,
    ProductsComponent,
    VendorsComponent,
    UsersComponent,
    StripeComponent,
    ClientsComponent,
    HomepageComponent,
    ProdutDetailComponent,
    UserLoginComponent,
    UserProfileComponent,
    // NameRulesComponent
  ], 
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    MatRippleModule,
    

  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MrvrModule { }
