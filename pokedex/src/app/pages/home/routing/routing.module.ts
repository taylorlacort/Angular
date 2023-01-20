import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from '../home.component';
import { DatailsComponent } from '../../datails/datails.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'datails/:id',
    component: DatailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
