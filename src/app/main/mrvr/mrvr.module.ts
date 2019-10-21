import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrvrComponent } from './mrvr.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
const routes: Routes = [
  {
    path: 'mrvr',
    component: MrvrComponent
  }
];

@NgModule({
  declarations: [MrvrComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule
  ]
})
export class MrvrModule { }
