import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'event',
    pathMatch:'full'
  },
  {
    path:'event',
    component:EventsComponent
  },
  {
    path: '**',
    redirectTo: '/event'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
