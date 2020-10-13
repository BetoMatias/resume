import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { PersonComponent } from './components/person/person.component';
import { SideInfoComponent } from './components/side-info/side-info.component';


@NgModule({
  declarations: [OverviewComponent, PersonComponent, SideInfoComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
