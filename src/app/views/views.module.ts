import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { PersonComponent } from './components/person/person.component';
import { SideInfoComponent } from './components/side-info/side-info.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@NgModule({
  declarations: [OverviewComponent, PersonComponent, SideInfoComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FontAwesomeModule
  ]
})
export class ViewsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faIdCard, faEnvelope, faUniversity, faGlobeAmericas, faBook);
  }
}
