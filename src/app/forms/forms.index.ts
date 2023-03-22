import { BuilderComponent } from './builder/builder.component';
import { SimpleComponent } from './simple/simple.component';
import { RendererComponent } from './renderer/renderer.component';
import {CustomBuilderComponent} from "./custom-builder/builder.component";
export const FORMS: any = [
  {
    path: '',
    redirectTo: 'builder',
    pathMatch: 'full'
  },
  {
    path: 'builder',
    title: 'Form Builder',
    component: BuilderComponent
  }
];
