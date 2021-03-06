import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {LegalNoticeComponent} from './legal-notice/legal-notice.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [{
      path: 'legal-notice',
      component: LegalNoticeComponent
    }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
