import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DoubleClickStreamComponent } from './double-click-stream/double-click-stream.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'double',
    pathMatch:'full'
  },
  {
    path:'event',
    component:EventsComponent
  },
  {
    path:'double',
    component:DoubleClickStreamComponent
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
