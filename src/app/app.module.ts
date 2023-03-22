import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Formio, FormioModule, FormioAppConfig } from '@formio/angular';
// import premium from '@formio/premium';
// Formio.use(premium);
import { FormioGrid } from '@formio/angular/grid';
import { FormioResources } from '@formio/angular/resource';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';

// Make sure we use fontawesome everywhere in Form.io renderers.
(Formio as any).icons = 'fontawesome';

/**
 * Import the Custom component CheckMatrix.
 */
// import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
      }
    ], {useHash: true})
  ],
  providers: [
    PrismService,
    FormioResources,
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
