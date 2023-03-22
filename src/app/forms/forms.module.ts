import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from '@formio/angular';
import { BuilderComponent } from './builder/builder.component';
import {CustomBuilderComponent} from './custom-builder/builder.component';
import { RendererComponent } from './renderer/renderer.component';
import { FormsComponent } from './forms/forms.component';
import { FORMS } from './forms.index';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule.forChild([{
      path: '',
      component: FormsComponent,
      children: FORMS
    }])
  ],
  declarations: [
    CustomBuilderComponent,
    BuilderComponent,
    RendererComponent,
    FormsComponent
  ],
  bootstrap: [
    FormsComponent
  ]
})
export class FormsModule { }
