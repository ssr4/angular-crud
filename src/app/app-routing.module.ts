import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainComponent } from './components/add-train/add-train.component';
import { TrainDetailsComponent } from './components/train-details/train-details.component';
import { TrainsListComponent } from './components/trains-list/trains-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'trains', pathMatch: 'full' },
  { path: 'trains', component: TrainsListComponent },
  { path: 'trains/:id', component:TrainDetailsComponent },
  { path: 'add', component: AddTrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
