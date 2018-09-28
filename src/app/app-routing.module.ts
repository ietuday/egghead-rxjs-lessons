import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DoubleClickStreamComponent } from './double-click-stream/double-click-stream.component';
import { WhyRxjsComponent } from './why-rxjs/why-rxjs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'rxjs',
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
    path:'rxjs',
    component:WhyRxjsComponent
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
