import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './home/routing/routing.module';


//Module
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DatailsComponent } from './datails/datails.component';

@NgModule({
  declarations: [
    HomeComponent,
    DatailsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
